import { connect } from "react-redux";
import UserShow from "./user_show";
import { fetchUser } from "../../actions/user_actions";
import { deleteProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  let products = Object.values(state.entities.products);
  let userId = state.session.id
  let user= state.entities.users[userId]
  console.log("users"+user)
  let userProducts = [];
  products.forEach(prod => {
    if (prod.seller_id === userId) {
      userProducts.push(prod);
    }
  });

  return {
    user,
    userProducts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    deleteProduct:id=>dispatch(deleteProduct(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);