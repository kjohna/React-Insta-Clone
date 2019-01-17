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
      user: this.props.user
    });
  }

  render() {

    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default authenticate(App)(Login);
