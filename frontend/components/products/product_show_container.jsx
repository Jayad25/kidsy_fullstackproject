import {connect} from "react-redux";
import {fetchProduct} from "../../actions/product_actions";
import ProductShow from './product_show';
import { createCartItem } from "../../actions/cart_item_actions";

const mapStateToProps = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId];
   
    let currentUser= state.entities.users[state.session.id]
  
    return {
      product: product,
      currentUser: currentUser,
      cartId: state.entities.cart.id,

    };
  };

const mapDispatchToProps = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id)),
  createCartItem: cartItem => dispatch(createCartItem(cartItem))
});
export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)

