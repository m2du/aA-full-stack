class Api::InvitesController < ApplicationController
  def create
    @invite = Invite.new(guild_id: params[:guild_id])
    if @invite.save
      render :invite
    else
      render json: @invite.errors.full_messages, status: 401
    end
  end

  def show
    invite = Invite.find_by(url: params[:id])
    if invite
      @guild = invite.guild
      render '/api/guilds/show'
    else
      render json: ['Invalid invite'], status: 401
    end
  end
end
