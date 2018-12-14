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

require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
