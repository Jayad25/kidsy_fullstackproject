@products.each do |product|
  json.set! product.id do
    json.extract! product, :id,:seller_id, :title,:description,:price, :quantity
    json.photoUrl url_for(product.photo)
  end
end