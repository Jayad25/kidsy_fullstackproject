class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :seller_id,null:false
      t.string :title,null:false
      t.string :description,null:false
      t.float :price,null:false
      t.integer :quantity,null:false
      t.timestamps
    end
    add_index :products, :seller_id
    add_index :products, :title
    add_index :products, [:title,:seller_id],unique:true

  end
end
