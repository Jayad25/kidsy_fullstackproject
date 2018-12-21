class Cart < ApplicationRecord
    validates :user_id, null: false, uniqueness: true
    belongs_to :user

    has_many :cart_items
end
