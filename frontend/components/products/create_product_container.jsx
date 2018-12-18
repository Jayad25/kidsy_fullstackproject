import { connect } from "react-redux";
import ProductForm from "./product_form";
import { createProduct,fetchProduct } from "../../actions/product_actions";

const mapStateToProps = (state) => ({
  currentUser: state.session.id,
  formType: "Create A Product",
  product:{
    seller_id: null,
    title: "",
    description: "",
    quantity: 1,
    price: 0,
    photoFile: null,
    photoUrl: null
  },
  errors:state.errors.products
});

const mapDispatchToProps = dispatch => ({
  action: product => dispatch(createProduct(product)),
  clearErrors:()=>dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);
