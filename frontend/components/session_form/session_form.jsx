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
        // console.log("sdmvnkjsbv"+{user})
        this.props.processForm(user).then(this.props.closeModal);
      }
    
    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });
      }
      renderErrors() {
        return(
          <ul className="render-errors-ul">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`} className="render-errors">
                {error}
              </li>
            ))}
          </ul>
        );
      }
      displayHeader(){
        let formtype = this.props.formType
          if(formtype === 'login'){
            return "Sign in to continue"
          }else if(formtype === 'signup'){
            return "Create your account"
          }
      }
      componentWillUnmount(){
        this.props.clearErrors();
      }

      displayEmail(){
        let formtype = this.props.formType
          if(formtype === 'signup'){
            return (<>
              <label className="sesion-labels">Email address:</label>
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                  </>
            );
          }
      }

      displayInsted(x){
        let formtype = this.props.formType
        // let x= this.props.otherForm
          if(formtype === 'signup'){
            return "Already have an acoount?"+ x +"Now"
          }else{
            return `New to Kidsy? ${this.props.otherForm} now`
          }
      }
    
    
    render(){
      
        return (
          
            <div className="login-form-container">
           
            <form onSubmit={this.handleSubmit} className="login-form-box">
            <h1 className="text-title">{this.displayHeader()}</h1>
              {this.renderErrors()}
              <div className="login-form">
                <br/>
                {this.displayEmail()}
                
                <label className="sesion-labels">Username:</label>

                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                
                <br/>
                <label className="sesion-labels">Password: </label>
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
               
                
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
              {/* <button className="extra-login">Continue with Google</button>
              <button className="extra-login">Continue with Facebook</button> */}
              <p className
              ="conditions">By clicking {this.props.formType}, you agree to Kidsy's Terms of Use and Privacy Policy. Kidsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
              <p className="change-form">{this.displayInsted(this.props.otherForm)}</p>
            </form>
            
          </div>
        );
    
    }
}

export default SessionForm;