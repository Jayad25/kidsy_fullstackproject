class CreateShoppingCartItems < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_cart_items do |t|
      t.integer :cart_id,null:false
      t.integer :product_id,null:false
      t.integer :quantity, default:1
      t.timestamps
    end
    add_index :shopping_cart_items, :cart_id
    add_index :shopping_cart_items, :product_id
  end
end
