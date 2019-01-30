class CartItem < ApplicationRecord

 validates :product_id, :quantity, :cart_id, presence: true
    belongs_to :cart
    belongs_to :product

    has_one :buyer,
      through: :cart,
      source: :user
end
