json.user do
  json.extract! user, :id, :username, :email
end
  
json.cart do
  if user.cart
    json.extract! user.cart, :id
  end
end