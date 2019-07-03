class Api::SessionsController < ApplicationController
  def create 
    @user = User.find_by_email(params[:user][:email])
    if @user
      if @user.is_password?(params[:user][:password])
        login!(@user)
        render "/api/users/show"
      else
        render json: [1], status: 401
      end
    else
      render json: [0], status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
