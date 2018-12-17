import { connect } from 'react-redux';
import { fetchProduct, updateProduct } from '../../actions/product_actions';
import React from 'react';
import productForm from './product_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    formType: "Create A Product",
    product: state.entities.product[ownProps.match.params.id],
});

const mapDispatchToProps = dispatch => ({
  updateProduct: data => dispatch(updateProduct(data)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productForm);