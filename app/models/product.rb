# == Schema Information
#
# Table name: products
#
#  id          :bigint(8)        not null, primary key
#  seller_id   :integer          not null
#  title       :string           not null
#  description :string           not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
    validates :seller_id,:title,:description,:price, presence:true
    
    has_one_attached :photo

    belongs_to :seller,
    foreign_key: :seller_id,
    primary_key: :id,
    class_name: 'User'

    has_many :shopping_cart_items,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: 'CartItem'

end
