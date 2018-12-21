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

    has_many :cart_items,
    foreign_key: :product_id,
    primary_key: :id,
    class_name: 'CartItem'


    def self.top_twelve_results(query_params)
        return Product.all if query_params == ""
        # debugger
        param = "%" + query_params.split("").join("%").downcase + '%'
    
        products = Product.where('lower(title) LIKE ?', param).to_a
      end

end
