import { connect } from 'react-redux';
import Recentlyviewed from './recently_viewed';
import { fetchProducts } from '../actions/product_actions';


const msp = state => ({
    products:Object.keys(state.entities.products).map(
        id => state.entities.products[id])
})

const mdp = dispatch =>({
    fetchProducts:()=>dispatch(fetchProducts())
})

export default connect(msp,mdp)(Recentlyviewed)