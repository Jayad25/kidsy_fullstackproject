import React from 'react';
import {Link, withRouter} from 'react-router-dom'


class productForm extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.product;
    // debugger
    console.log(this.props.product)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update=this.update.bind(this);
    this.imagefile=this.imagefile.bind(this);
    this.handleFile=this.handleFile.bind(this);
  }

  update(field) {
    // debugger
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if (!this.state.photoUrl) { 
      console.log("handle this better later");
      alert("please upload file")
    }
    const id = this.props.currentUser;
    const formData = new FormData();
    for (let key in this.state) {
      if (key === 'seller_id') {
        formData.append(`product[${key}]`,this.props.currentUser)
      }else{
        formData.append(`product[${key}]`,this.state[key])
    }
  }
    if(this.state.photoFile){
      formData.append('product[photo]',this.state.photoFile);
    }

     this.props.action(formData,this.props.product.id)
     .then((railsitem)=>{
      this.props.history.push(`/products/`)})
  }
  handleFile(e){
    // this.setState({photoFile: e.currentTarget.files[0]})
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  
  renderErrors() {
    return(
      <ul className="render-errors-ul product-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="render-errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  formtitle(){
    if(this.props.formType==="Create A Product"){
      return (
        <>Add a new Listing</>)
    }else{
      return <>Update Product</>
    }
  }

  imagefile(){
    const preview = this.state.photoUrl ? <img className="preview-image" src={this.state.photoUrl} /> : null;
    if(!preview){
      return (<div className="image-box">
                
      <input type="file" onChange={this.handleFile} className="image-file"/>
    </div>)
    }
  }


  render() {
    console.log(this.props.formType)
   
    // if(this.props.formType==='Update product'){
     const preview = this.state.photoUrl ? <img className="preview-image" src={this.state.photoUrl} /> : null;
    // }

    let result= "";
    if(this.props.product.photoUrl){
       result= <img className="preview-image" src={this.props.product.photoUrl} />
    }
    
    return(
      <div>  
        <form onSubmit={this.handleSubmit} className="product-form" >
          <h2 className="form-title">{this.formtitle()}</h2>
            <div className="total-form">
              <div className="with-out-image">
              <label className="listing-details">Listing details</label>
              <div className="title">
                <div className="form-label">
                  <h3 className="title-label">Title</h3>
                  <h6 >Include Keywords that buyers would use to search for your item</h6>  
                </div>
                <input className="title-input" type="text" value={this.state.title}
                    onChange={this.update('title')}
                    />
              </div>

              <div className="form-description">
                <div className="desc-label">Description
                <h6>Start with a brief overview that describes your item's finest features.List details like dimensions and key features in easy-to-read bullet points.Tell buyers a bit about your process or the story behind this item.</h6></div>
                  <div className="desc2">
                    <textarea value={this.state.description}
                    onChange={this.update('description')}
                    className="textarea-desc"/>
                  </div>
                </div>

              <div className="price-div">
                <div className="price">
                  <h3>Price</h3>
                  <h6>Factor in the costs of materials and labor, plus any related business expenses. Consider the total price buyers will pay too—including shipping.</h6>
                </div>
                <input value={this.state.price} type="number"
                onChange={this.update('price')} className="price-input"/>
              </div>

              <div className="quantity-div">
                <div className="quantity">
                  <h3>Quantity </h3>
                  <h6>For quantities greater than one, this listing will renew automatically until it sells out. You’ll be charged a $0.20 USD listing fee each time.</h6>
                </div>
                <input value={this.state.quantity} type="number"
                 onChange={this.update('quantity')} id="quantity-input"/>
              </div>

          {this.renderErrors()}

              <div className="buttons">
                <input  type="submit" className="button"
                  value={this.props.formType}/>
                  <Link to="/" ><button className="button">Cancel</button></Link>
                </div>
            </div>
        <div className="image-one" >
       
            <div className="image-left">
              <h3>Photos</h3>
              <h6>Tips:Use natural light and no flash.
                    Include a common object for scale.
                    Show the item being held, worn, or used.
                    Shoot against a clean, simple background.</h6>
            </div>
            <div className="image-right">
            {/* <i className="fas fa-camera"><p>Add a photo</p></i> */}
                    
                    
                    <div className="preview-image">{preview}
                      {this.imagefile()}
                      </div>
              </div>
           </div>
      </div>
    </form>  
  </div>
    )}
}

export default withRouter(productForm);