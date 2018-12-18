export const fetchProducts=() => (
    $.ajax({
        method:"GET",
        url:"api/products"
    })
);

export const fetchProduct = id =>(
  $.ajax({
    method: "GET",
    url: `/api/products/${id}`
  })
);

export const createProduct = product => (
    $.ajax({
        method:"POST",
        url:`api/products`,
        data: product,
        contentType: false,
        processData: false
    })
);

export const updateProduct = (formData,productId) => {
    debugger
    return $.ajax({
        method:"PATCH",
        url:`api/products/${productId}`,
        data:formData,
        contentType: false,
        processData: false
    })
};

export const deleteProduct = productId => (
    $.ajax({
        method:"DELETE",
        url:`api/products/${productId}`,
    })
);