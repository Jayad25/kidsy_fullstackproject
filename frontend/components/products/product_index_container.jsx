import { connect } from 'react-redux';
import ProductIndex from './product_index';

import { fetchProducts,deleteProduct,searchProducts } from '../../actions/product_actions';


const msp = state => ({
    products:Object.keys(state.entities.products).map(
        id => state.entities.products[id])
})

const mdp = dispatch =>({
    fetchProducts:()=>dispatch(fetchProducts()),
    search:(title)=>dispatch(searchProducts(title)),
    deleteProduct:id=>dispatch(deleteProduct(id))
})

export default connect(msp,mdp)(ProductIndex)