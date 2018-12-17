import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { fetchProducts,deleteProduct } from '../../actions/product_actions';


const msp = state => ({
    products:Object.keys(state.entities.products).map(
        id => state.entities.products[id])
})

const mdp = dispatch =>({
    fetchProducts:()=>dispatch(fetchProducts()),
    deleteProduct:id=>dispatch(deleteProduct(id))
})

export default connect(msp,mdp)(ProductIndex)