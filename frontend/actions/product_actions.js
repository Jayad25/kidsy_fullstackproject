import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS="RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT="RECEIVE_PRODUCT";
export const REMOVE_PRODUCT="REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS="RECEIVE_PRODUCT_ERRORS";
export const RECEIVE_CART = "RECEIVE_CART";
export const RECEIVE_CART_PRODUCT = "RECEIVE_CART_PRODUCT";
export const REMOVE_CART_PRODUCT = "REMOVE_CART_PRODUCT";

const receiveProducts = products => (
    {
        type:RECEIVE_ALL_PRODUCTS,
        products
    }
)

const receiveProduct = product => (
    {
        type: RECEIVE_PRODUCT,
        product
    }
)
const removeProduct = productId => (
    {
        type:REMOVE_PRODUCT,
        productId
    }
)

const receiveErrors = errors => ({
    type: RECEIVE_PRODUCT_ERRORS,
    errors
})

export const fetchProducts=()=> dispatch => (
    ProductApiUtil.fetchProducts().
    then(products=>dispatch(receiveProducts(products)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchProduct = id => dispatch =>
  ProductApiUtil.fetchProduct(id).then(product =>
    dispatch(receiveProduct(product))
  );

export const createProduct = (product) => dispatch => (
    ProductApiUtil.createProduct(product).
    then( product => dispatch(receiveProduct(product)),
    err => dispatch(receiveErrors(err.responseJSON)))
);


export const updateProduct = ( product,productId ) => dispatch => {
    // console.log(product)
   return  ProductApiUtil.updateProduct( product,productId ).
    then(product => dispatch(receiveProduct( product )),
    err => dispatch(receiveErrors(err.responseJSON)))
};

export const deleteProduct=(productId)=> dispatch => (
    ProductApiUtil.deleteProduct(productId).
    then(product=>dispatch(removeProduct(productId)),
    err => dispatch(receiveErrors(err.responseJSON)))
)


export const searchProducts = title => dispatch => (
    ProductApiUtil.productSearch(title)
      .then(products => dispatch(receiveProducts(products)))
  );

export const receiveCart = (payload) => ({
    type: RECEIVE_CART,
    payload
});

export const requestCart = () => dispatch => {
    return ProductAPIUtil.fetchCart().then((cart) =>
        dispatch(receiveCart(cart)));
};

// -----------------------------------------
export const receiveCartItem = (payload) => ({
    type: RECEIVE_CART_PRODUCT,
    payload
});

export const createCartItem = (item) => dispatch => {

    return ProductAPIUtil.CartItem(item)
        .then((item1) => dispatch(receiveCartItem(item1)),
            err => (
                dispatch(receiveErrors(err.responseJSON))
            ));
};


// -----------------------------------------

export const removeCartItem = (CartProductId) => ({
    type: REMOVE_CART_PRODUCT,
    CartProductId
});

export const deleteCartItem = (id) => dispatch => {
    return ProductAPIUtil.deleteCartItem(id).then(() =>
        dispatch(removeCartItem(id)));
};

