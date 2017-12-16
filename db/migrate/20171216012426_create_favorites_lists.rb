class CreateFavoritesLists < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites_lists do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
