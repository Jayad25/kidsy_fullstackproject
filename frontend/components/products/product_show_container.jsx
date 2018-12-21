import {connect} from "react-redux";
import {fetchProduct} from "../../actions/product_actions";
import ProductShow from './product_show';
import {createCartItem}  from '../../actions/cart_item_actions'
import {createCart} from '../../actions/cart_actions'

const mapStateToProps = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId];
   
    let currentUser= state.entities.users[state.session.id]
    let cartId=state.entities.cart.id
    return {
      product: product,
      currentUser: currentUser,
      cartId:cartId

    };
  };

const mapDispatchToProps = dispatch => (
    {fetchProduct: (id) => dispatch(fetchProduct(id)),
     createCartItem:(cartItem)=>dispatch(createCartItem(cartItem)),
    createCart:(cart)=>dispatch(createCart(cart))}
)
export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)

