class AddCardIdToFavorites < ActiveRecord::Migration[5.1]
  def change
    add_column :favorites, :card_id, :integer
  end
end
