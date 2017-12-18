class UsersController < ApplicationController

  def create
    user = User.new(user_params)
    
    if user.save

      jwt = Auth.issue({ user: user.id })

      render json: { jwt: jwt }
    else
      render json: { message: user.errors }, status: 400
    end
  end

  private

  def user_params
    params.require(:user).permit(
                            :username, 
                            :email, 
                            :password, 
                            :password_confirmation
                          )
  end

end