class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)
    @channel.guild_id = params[:guild_id]

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name)
  end
end
