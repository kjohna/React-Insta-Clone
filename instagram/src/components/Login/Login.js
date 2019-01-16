import React from 'react';

import './Login.css';

class Login extends React.Component {
  // console.log("login props:", props);
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: ""
    }
  }

  handleInput = (e) => {
    this.setState ({
      [e.target.name]: e.target.value
    });
  }

  handleLogin(e) {
    // e.preventDefault();
    console.log("login!", e.target);
  }

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleLogin}>
          <input 
            type="text"
            placeholder="User Name"
            name="userNameInput"
            value={this.state.userNameInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <input 
            type="password"
            placeholder="Password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <input 
            type="submit"
            value="Login"
          />
        </form>
      </div>
    );
  }
}

export default Login;