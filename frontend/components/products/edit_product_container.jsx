import React from 'react';
import { connect } from 'react-redux';
import ProductForm from './product_form';
import { fetchProduct, updateProduct } from '../../actions/product_actions';

const mapStateToProps = (state, ownProps) => {
  const product = state.entities.products[ownProps.match.params.productId];
  const errors=state.errors.products
  const currentUser = state.session.id
  console.log(product)
  const formType = 'Update product';

  return { product, errors,formType,currentUser };
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

  // componentDidUpdate(prevProps) {
  //   if (prevProps.product.id != this.props.match.params.productId) {
  //     this.props.fetchProduct(this.props.match.params.productId);
  //   }
  // }

  render() {
    const { action, formType, product, errors,currentUser } = this.props;
    if(this.props.product){
    return (
      <ProductForm
        action={action}
        formType={formType}
        product={product}
        errors={errors} 
        currentUser={currentUser}/>
    );
    }else{
      return <div />
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);