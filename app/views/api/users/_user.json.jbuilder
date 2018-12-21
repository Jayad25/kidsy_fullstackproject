json.user do
  json.extract! user, :id, :username, :email
end
  


json.products do
  user.products.each do |product|
    json.set! product.id do
      json.extract! product, :id, :title, :description, :price, :seller_id
      json.photoUrl url_for(product.photo)
    end
  end
end