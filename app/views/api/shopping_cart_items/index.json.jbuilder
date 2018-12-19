json.cart do
  @items.each do |item|
    json.set! item.id do
      json.extract! item, :product_id, :quantity, :id
      json.price item.price
    end
  end
end

json.products do
  @items.each do |item|
    json.set! item.product_id do
      json.extract! item.product,
      :id, :seller_id, :title, :description, :price, :photo
    end
  end
end