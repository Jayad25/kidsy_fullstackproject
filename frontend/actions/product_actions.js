import * as ProductApiUtil from '../util/product_api_util';

export const RECEIVE_ALL_PRODUCTS="RECEIVE_ALL_PRODUCTS";
export const RECEIVE_PRODUCT="RECEIVE_PRODUCT";
export const REMOVE_PRODUCT="REMOVE_PRODUCT";
export const RECEIVE_PRODUCT_ERRORS="RECEIVE_PRODUCT_ERRORS";


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

export const categoryProducts = type => dispatch =>
         ProductAPIUtil.productCategory(type).then(products =>
           dispatch(receiveProducts(products))
         );



