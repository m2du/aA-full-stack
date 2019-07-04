class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      errors = @user.errors.full_messages
      errorFlags = []
      errors.each do |error|
        if error == 'Email has already been taken'
          errorFlags << 2
        elsif error.include?('Password is too short')
          errorFlags << 3
        end
      end
      render json: errorFlags, status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
