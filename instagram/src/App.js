import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';

import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.postData = dummyData;
    this.posts = this.postData.map(post => {
      return <PostContainer key={post.timestamp} post={post} />
    });
  }

  render() {
    
    return (
      <div className="App">
        <SearchBar />
        {this.posts}
      </div>
    );
  }
}

export default App;
