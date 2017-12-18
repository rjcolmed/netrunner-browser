class FavoritesController < ApplicationController
  before_action :set_list, :set_card, :authenticate, only: %i[create index]

  def index
    favorites = @list.favorites.map { |favorite| favorite.card }
    
    render json: favorites
  end

  def create
    favorite = Favorite.create(card: @card, list: @list)
  end

  private 

  def set_card
    @card = Card.find_by(code: params[:code])
  end

  def set_list
    @list = List.find_or_create_by(user_id: current_user?.id)
  end
end
