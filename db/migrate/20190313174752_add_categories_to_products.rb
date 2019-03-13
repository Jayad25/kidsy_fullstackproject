class AddCategoriesToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :category, :string, null: false
  end
end
