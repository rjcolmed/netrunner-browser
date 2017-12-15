class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :code
      t.string :side_code
      t.string :title
      t.string :type_code
      t.text :text
      t.string :keywords
      t.string :flavor
      t.string :pack_code

      t.timestamps
    end
  end
end
