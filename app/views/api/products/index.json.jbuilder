@products.each do |product|
  json.set! product.id do
    json.extract! product, :seller_id, :title,:description,:price
  end
end