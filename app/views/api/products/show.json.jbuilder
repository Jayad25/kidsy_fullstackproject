
  json.extract! @product, :id, :seller_id, :title, :description, :price
    json.photoUrl url_for(@product.photo)