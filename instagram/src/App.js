import React, { Component } from 'react';
import authenticate from './components/authentication/authenticate';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      
    }
  }

  componentDidMount() {
    this.setState({
      
    });
  }

  render() {

    return (
      <div className="App">
        <AuthComponent />
      </div>
    );
  }
}

const AuthComponent = authenticate(PostsPage);  // AuthComponent gets set to PostsPage

export default App;
