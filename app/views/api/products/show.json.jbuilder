
  json.extract! @product, :id, :seller_id, :title, :description, :price, :quantity, :category
    json.photoUrl url_for(@product.photo)

    json.seller do
  json.set! @product.seller.id do
    json.extract! @product.seller, :id, :username, :email
  end
end