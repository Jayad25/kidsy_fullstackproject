import React from 'react';


class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:"",
            email:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.update=this.update.bind(this)
    }

    handleSubmit(e) {
        
        e.preventDefault();
        const user = {user:Object.assign({}, this.state)};
        console.log("sdmvnkjsbv"+{user})
        this.props.processForm(user);
      }
    // updateEmail(e){
    //     this.setState({"email":e.target.value})
    // }
    // updatePassword(e){
    //     this.setState({"password":e.target.value})
    // }
    // updataeUserName(e){
    //     this.setState({"username":e.target.value})
    // }
    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
            <label> UserName:
                <input type="text" onChange={this.update("username")} value={this.state.username}/>
            </label>
            <label> PassWord:
                <input type="password" onChange={this.update("password")} />
            </label>
            <label> Email:
                <input type="email" onChange={this.update("email")} value={this.state.email}/>
            </label>
            <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default SessionForm;