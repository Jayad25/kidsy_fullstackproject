json.extract! user, :id, :username

json.products do

    user.products.each do |item|
      json.set! item.id do
        json.extract! item, :id, :title, :description, :price, :quantity, :photo
      end
    end
  end