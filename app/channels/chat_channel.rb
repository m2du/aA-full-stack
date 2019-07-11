class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel"
  end

  def speak(data)
    message = Message.create(data['message'])
    if message.save
      socket = { message: {
        id: message.id,
        body: message.body,
        authorId: message.author_id,
        channelId: message.channel_id,
        createdAt: message.created_at,
        updatedAt: message.updated_at
      }}
      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def unsubscribed; end
end