export const createCart = cart => {
    return $.ajax({
      method: "POST",
      url: `api/cart_items`,
      data:cart
    })
  }