class Api::MessagesController < ApplicationController
  def index
    @messages = Channel.find_by(id: params[:channel_id])
                       .messages
                       .order(created_at: :desc)
                       .limit(50)
  end
end
