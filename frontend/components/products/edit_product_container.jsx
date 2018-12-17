import { connect } from 'react-redux';
import { fetchProduct, updateProduct } from '../../actions/product_actions';
import React from 'react';
import productUpdate from './product_edit';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.ui.session.currentUser,
    product: state.entities.product[ownProps.match.params.id],
    formType: "Update Product"
});

const mapDispatchToProps = dispatch => ({
  updateProduct: data => dispatch(updateProduct(data)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  clearError: () => dispatch(clearError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(productUpdate);