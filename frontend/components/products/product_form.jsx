


import React from 'react';
import Dropzone from 'react-dropzone';
import {Link} from 'react-router-dom'


class productForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.product
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const id = this.props.currentUser;
    const formData = new FormData();
    for (let key in this.state) {
      if (key === 'seller_id') {
        formData.append(`product[${key}]`,this.props.currentUser)
      }else{
        formData.append(`product[${key}]`,this.state[key])
    }
  }
    formData.append('product[photo]',this.state.photoFile);
    debugger
     this.props.action(formData,this.props.product.id)
     .then(()=>{
       this.props.history.push(`/`)})
  }
  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  
  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}  >
          <h2>Create New details</h2>
            <label>
              Title
              <input type="text" value={this.state.title}
                onChange={this.update('title')}
                />
            </label>
            <label>
              Description 
              <textarea value={this.state.description}
                onChange={this.update('description')}
                className="product-input"/>
            </label>
          <label>
            Price
            <input value={this.state.price}
              onChange={this.update('price')}/>
          </label>
          <label>
           Quantity 
            <input value={this.state.quantity}
              onChange={this.update('quantity')}/>
          </label>
          <label>Image:
            <input type="file" onChange={this.handleFile.bind(this)}/>
          </label>
       <Link to="/">Cancel</Link>
              <input  type="submit"
                value={this.props.formType}/>
        </form>
     
  </div>
    )}
}

export default productForm;