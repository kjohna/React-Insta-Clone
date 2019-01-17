import React, { Component } from 'react';
import authenticate from './components/authentication/authenticate';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      currUser: ""
    }
    this.props = props;
  }

  componentDidMount() {
    this.setState({
      currUser: localStorage.getItem('instaCloneUser')
    });
  }

  render() {
    // console.log("user", this.state.currUser);
    return (
      <div className="App">
        <ConditionalRender/>
      </div>
    );
  }
}

const ConditionalRender = authenticate(PostsPage)(Login);

export default App;
