import React from 'react';
import styled, { css } from 'styled-components';
import instaLogo from '../../assets/iglogo.png';

const LoginStyled = styled.div`
  margin: 30px auto 0 auto;
  padding: 5em 0 15em 0;
  width: 65%;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  box-shadow: 0px 0px 5px lightgray;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const LogoStyled = styled.img`
  max-height: 3.5em;
`
const FormStyled = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const InputStyled = styled.input`
  width: 50%;
  margin-top: 1em;
  padding: .5em;
  height: 2em;
  border-radius: 3px;
  background-color: #fafafa;
  border: 1px solid #e2e2e2;
  
  &:focus {
    color: black;
    outline: none;
    box-shadow: 0px 0px 5px gray;
  }  

  ${props => 
    props.btn &&
    css`
      background-color: ${props.btnColor};
      border-radius: 3px;
      color: white;
      padding: .5em;
      height: 2.5em;
      font-size: 1em;
      font-weight: bold;

      &:focus {
        color: white;
        outline: none;
        box-shadow: none;
      }  
    `
  }
`

class Login extends React.Component {
  // console.log("login props:", props);
  constructor() {
    super();
    this.state = {
      userNameInput: "",
      passwordInput: "",
      btnColor: "#b5e0f9"
    }
  }

  handleInput = (e) => {
    let btnColor = "red";
    e.target.name === "userNameInput" &&
      e.target.value ? btnColor = "#0797ec" : btnColor = "#b5e0f9";//console.log('uname'):console.log('no uname');//
    this.setState ({
      [e.target.name]: e.target.value,
      "btnColor": btnColor
    });
  }

  handleLogin = (e) => {
    // e.preventDefault();
    // console.log("login!", e.target.value);
    this.state.userNameInput ? localStorage.setItem('instaCloneUser', this.state.userNameInput)
    : e.preventDefault();
    // console.log(localStorage.getItem('instaCloneUser'));
  }

  render() {
    return (
      <LoginStyled className="login">
        <LogoStyled src={instaLogo} alt="" />
        <FormStyled onSubmit={this.handleLogin}>
          <InputStyled 
            type="text"
            placeholder="User Name"
            name="userNameInput"
            value={this.state.userNameInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <InputStyled 
            type="password"
            placeholder="Password"
            name="passwordInput"
            value={this.state.passwordInput}
            onChange={this.handleInput}
            autoComplete="off"
          />
          <InputStyled 
            type="submit"
            value="Login"
            btn
            btnColor={this.state.btnColor}
          />
        </FormStyled>
      </LoginStyled>
    );
  }
}

export default Login;