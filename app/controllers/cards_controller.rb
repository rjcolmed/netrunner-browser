class CardsController < ApplicationController
  def index
    render json: Card.all
  end

  def create
    params[:cards].each do |card_params|
      Card.create(
        title: card_params[:title],
        code: card_params[:code],
        side_code: card_params[:side_code],
        type_code: card_params[:type_code],
        text: card_params[:text],
        keywords: card_params[:keywords],
        flavor: card_params[:flavor],
        pack_code: card_params[:pack_code]
      )
    end
  end

  def destroy
    @card = Card.find_by(code: params[:code])

    favorite = @card.favorites.detect { |favorite| favorite.card == @card }

    favorite.destroy

    render json: { message: "favorite removed", success: 'ok' }
  end

end
