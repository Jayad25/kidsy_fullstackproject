import React from 'react';

class PostForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.post
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updatefield=this.updatefield.bind(this)
  }
  updatefield(type){
    this.setState({type:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state)
  }
 
  render () {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update("title")} value={this.state.title}/>
          <input type="text" onChange={this.update("quantity")} value={this.state.quantity}/>
          <input type="text" onChange={this.update("price")} value={this.state.price} />
          <textarea onChange={this.update("description")} value={this.state.description}></textarea>
          <input type="submit" value="Create Product"/>
          </form>
      </div>
    );
  }
}

export default PostForm;
