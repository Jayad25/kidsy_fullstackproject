export const createCartItem = cartItem => {
    return $.ajax({
      method: "POST",
      url: `api/cart_items`,
      data:cartItem
    })
  }

  export const fetchCartItems = cartItems => {
    return $.ajax({
      method: "GET",
      url: `api/cart_items`
    })
  }

  export const fetchCartItem = cartItem => {
    return $.ajax({
      method: "GET",
      url: `api/cart_items/${cartItem.id}`
    })
  }

  export const deleteCartItem = cartItemId => {
      return $.ajax({
          method:"DELETE",
          url:`api/cart_items/${cartItemId}`
      })
  }




