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
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }
    
    
    render(){
        return (
            <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              
              {this.renderErrors()}
              {/* Please {this.props.formType} or {this.props.otherForm} */}
              <div onClick={this.props.closeModal} className="close-x">X</div>
              <div className="login-form">
                <br/>
                <label className="sesion-labels">Email:
                  <input type="email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
                <label className="sesion-labels">Username:

                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                  />
                </label>
                <br/>
                <label className="sesion-labels">Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                
                <br/>
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        );
    
    }
}

export default SessionForm;