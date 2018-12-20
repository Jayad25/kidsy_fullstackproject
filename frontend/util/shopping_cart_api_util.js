
  
  export const fetchShoppingCart = id => (
    $.ajax({
        method: "GET",
        url: `api/shopping_cart/${id}`
    })
  );
  
  export const createShoppingCart = item => (
    $.ajax({
        method: "POST",
        url: 'api/shopping_cart',
        data: { item }
    })
  );
  
  
  
  export const deleteShoppingCart = id => (
    $.ajax({
      method: "DELETE",
      url: `api/shopping_cart/${id}`,
    })
  );