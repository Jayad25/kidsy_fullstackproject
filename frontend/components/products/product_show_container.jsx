import {connect} from "react-redux";
import {fetchProduct} from "../../util/product_api_util";
import ProductShow from './product_show';

const mapStateToProps = (state,ownProps) => {
    const product = state.entities.products[ownProps.match.params.productId];
    return {
        product:product
    }
}

const mapDispatchToProps = dispatch => (
    {fetchProduct: (id) => dispatch(fetchProduct(id))}
)
export default connect(mapStateToProps,mapDispatchToProps)(ProductShow)