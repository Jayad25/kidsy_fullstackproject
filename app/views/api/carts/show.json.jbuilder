json.cart do 
  json.extract! @cart, :id, :user_id, :product_ids
end

json.cart_items do
  @cart.products.each do |cart_item|
    json.set! cart_item.id do
      json.extract! cart_item, :id, :product_id, :quantity, :cart_id
      json.product_name cart_item.product.product_name
      json.price  cart_item.product.price
      json.description  cart_item.product.description

      if cart_item.product.photos.attached?
        json.photoUrls cart_item.product.photos.map { |file| url_for(file) }
      end
    end
  end
end

