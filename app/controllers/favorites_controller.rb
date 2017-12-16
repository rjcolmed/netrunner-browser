class FavoritesController < ApplicationController
  def index
    # here we run set_user and then do something like 
    # @user.favorites, then render json: @favorites
  end

  def create
    # here, we add cards to a user's favorites
    # so we would need to set_user again, then
    # do something like set_card, then 
    # @user.favorites << @card, then @user.favorites.save
  end
  
  def show
  end

  private 

  def set_card
    @card = Card.find_by(card_code: params[:card_code])
  end
end
