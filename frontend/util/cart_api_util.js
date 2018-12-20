export const createCart = cart => {
    return $.ajax({
      method: "GET",
      url: `api/carts`,
      data:cart
    })
  }