import React, { Component } from 'react';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      user: ""
    }
    this.props = props;
  }

  componentDidMount() {
    this.setState({
      user: localStorage.getItem('instaCloneUser')
    });
  }

  render() {
    console.log("user", this.state.user);
    return (
      <div className="App">
        <PostsPage user={this.state.user}/>
      </div>
    );
  }
}

export default authenticate(App)(Login);
