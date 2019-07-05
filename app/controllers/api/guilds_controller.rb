class Api::GuildsController < ApplicationController
  def index
    @guilds = current_user.guilds
  end
  
  def create
    @guild = Guild.new(guild_params)
    @guild.owner_id = current_user.id

    if @guild.save
      render :show
    else
      render json: @guild.errors.full_messages
    end
  end

  def show
    @guild = Guild.find_by(id: params[:id])
  end
  
  def update
    @guild = Guild.find_by(id: params[:id])

    if @guild.update_attributes(guild_params)
      render :show
    else
      render json: @guild.errors.full_messages
    end
  end
  
  def destroy
    @guild = Guild.find_by(id: params[:id])
    @guild.destroy
    render json: {}
  end

  private

  def guild_params
    params.require(:guild).permit(:name)
  end
end
