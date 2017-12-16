class ListsController < ApplicationController
  before_action, only: %i[show update]

  def show
  end

  def create
  end

  def update
  end

  private

  def set_list
    @list = List.find_by(user_id: params[:id])
  end
end