class RenameFavoritesListsToFavorites < ActiveRecord::Migration[5.1]
  def change
    rename_table :favorites_lists, :favorites
  end
end
