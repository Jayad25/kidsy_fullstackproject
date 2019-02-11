json.user do
  json.extract! user, :id, :username, :email
end
  
json.cart do 
  json.extract! user.shopping_cart, :id
end