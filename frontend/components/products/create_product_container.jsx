import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct, receiveErrors } from "../../actions/product_actions";

const mapStateToProps = (state, ownProps) => ({
  userId: state.session.currentUser.id,
  formType: "Create A Product"
});

const mapDispatchToProps = dispatch => ({
  action: product => dispatch(createProduct(product)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
