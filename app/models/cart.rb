class Cart < ApplicationRecord
    validates :user_id, null: false, uniqueness: true
    belongs_to :user

    has_many :products,
    foreign_key: :cart_id,
    className: :CartItem
end
