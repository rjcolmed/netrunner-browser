class SessionsController < ApplicationController
  before_action :authenticate, except: %i[create]

  def create
    user = User.find_by(username: sessions_params[:username])

    if user && user.authenticate(sessions_params[:password])
      jwt = Auth.issue({ user: user.id })

      render json: { jwt: jwt }
    else
      render json: { message: user.errors }, status: 400
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