class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel"
  end

  def speak(data)
    message = Message.create(data['message'])
    if message.save
      socket = { message: {
        body: message.body,
        authorId: message.author_id,
        channelId: message.channel_id,
        createdAt: message.created_at,
        updatedAt: message.updated_at
      }, type: 'message' }
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def load
    messages = Message.all.collect(&:body)
    socket= { messages: messages, type: 'messages' }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end