import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  componentDidMount() {
    // debugger
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user;
    const products = this.props.userProducts;
    const deleteProduct = this.props.deleteProduct;

    const allUserProducts = () => {
      // debugger
      return products.map(prod => (
        <div key={prod.id} >
          <Link
            key={prod.id}
            to={`/products/${prod.id}`}>
            <div>
            <div className="user-show-products-details">
              <img  src={prod.photoUrl} className="user-show-image"/>
              <div className="user-show-product-title">{prod.title}</div>
            <div >${prod.price}</div>
            
            </div>
            </div>
            </Link>
            <div className="link-edit-delete">
            <Link to={`/products/${prod.id}/edit`}>Update Product
            </Link>
            <button onClick={()=>deleteProduct(prod.id)}>Delete</button>
            </div>
            
            
            
            
           
          
          
        </div>
      ));
    };

    if (!user || !products) return <div />;

    return (
      <div >
        <div className="user-show-products">{allUserProducts()}</div>
      </div>
    );
  }
}

export default UserShow;