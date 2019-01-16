import React, { Component } from 'react';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      
    }
    this.props = props;
  }

  componentDidMount() {
    this.setState({
      
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
