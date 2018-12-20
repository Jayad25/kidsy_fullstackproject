export const fetchShoppingCartItems = (cart_item) => (
  $.ajax({
    method: 'get',
    url: "api/shopping_cart_items",
    data: {cart_item}
  })
)

export const createShoppingCartItem = (cart_item) => (
  $.ajax({
    method: 'post',
    url: 'api/shopping_cart_items',
    data: {cart_item}
  })
);

export const deleteShoppingCartItem = (itemId) => (
  $.ajax({
    method: 'delete',
    url: `/api/shopping_cart_items/${itemId}`
  })
)
