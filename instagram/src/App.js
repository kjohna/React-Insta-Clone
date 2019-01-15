import React, { Component } from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      postData: [],
    }
  }

  componentDidMount() {
    // if we were using an api to get post data, it would happen here:
    const message = dummyData;
    // the fetch would call next line once the 'message' data was returned
    this.setState({
      postData: message
    });
  }

  render() {
    const posts = this.state.postData.map(post => {
      return <PostContainer key={post.timestamp} post={post} />
    });

    return (
      <div className="App">
        <SearchBar />
        {posts}
      </div>
    );
  }
}

export default App;
