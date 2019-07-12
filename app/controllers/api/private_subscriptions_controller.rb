class Api::PrivateSubscriptionsController < ApplicationController
  def index
    @subs = PrivateSubscription.joins("JOIN private_subscriptions AS other ON other.channel_id=private_subscriptions.channel_id")
      .where(["private_subscriptions.user_id = ? AND other.user_id != ?", current_user.id, current_user.id])
      .select("private_subscriptions.id, private_subscriptions.channel_id, other.user_id AS user_id").includes(:channel, :user).distinct
  end

  def create
    @sub = PrivateSubscription.dm_exists?(current_user.id, dm_params[:user_id])

    if (@sub)
      render :show
    else
      # create new private channel
      channel = Channel.create!(guild_id: Guild.first.id, name: 'private')
      # create own subscription
      own_sub = PrivateSubscription.create!(channel_id: channel.id, user_id: current_user.id)
      # create other subscription
      other_sub = PrivateSubscription.create!(channel_id: channel.id, user_id: dm_params[:user_id])
      @sub = PrivateSubscription.dm_exists?(current_user.id, dm_params[:user_id])
      render :show
    end
  end

  private

  def dm_params
    params.require(:dm).permit(:user_id)
  end
end
