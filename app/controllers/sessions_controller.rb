class SessionsController < ApplicationController
  def create
    user = User.find_by(username: sessions_params[:username])

    if user && user.authenticate(sessions_params[:password])
      render json: user
    else
      # render json: { message: user.errors }, status: 400
    end
  end

  def destroy
  end

  private

  def sessions_params
    params.require(:user).permit(:username, :password)
  end
end

# sessions_params