import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import { fetchProduct, updateProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId];
  console.log(product)
  const formType = 'Update product';

  return { product, formType };
};

const mapDispatchToProps = dispatch => {
  
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    action: (product,productId) => dispatch(updateProduct(product,productId)),
  };
};

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