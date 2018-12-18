import { connect } from 'react-redux';
import { fetchProduct, updateProduct } from '../../actions/product_actions';
import React from 'react';
import ProductForm from './product_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    formType: "Update Product",
    product: state.entities.product[ownProps.match.params.id],
});

const mapDispatchToProps = dispatch => ({
  action: data => dispatch(updateProduct(data)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  clearError: () => dispatch(clearError()),
});



class EditProductForm extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.product.id != this.props.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId);
    }
  }

  render() {
    const { action, formType, product } = this.props;
    return (
      <ProductForm
        action={action}
        formType={formType}
        product={product} />
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);