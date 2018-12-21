import {connect} from "react-redux";
import {fetchProduct} from "../../actions/product_actions";
import ProductShow from './product_show';
import {createCartItem}  from '../../actions/cart_item_actions'

const mapStateToProps = (state, ownProps) => {
    let product = state.entities.products[ownProps.match.params.productId];
    return {
      product: product
    };
  };

const mapDispatchToProps = dispatch => (
    {fetchProduct: (id) => dispatch(fetchProduct(id)),
     createCartItem:(cart)=>dispatch(createCartItem(cart))}
)
export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)

