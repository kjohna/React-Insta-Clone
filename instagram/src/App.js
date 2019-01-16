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
      searchText: ''
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

  handleSearchInput = (e) => {
    // console.log("search input ", e.target.value.length);
    // if anything in this.state.searchText, filter for username contains searchText otherwise return all posts
    const searchResults = e.target.value.length > 0 ? 
      dummyData.filter(post => post.username.includes(e.target.value))
    : dummyData;
    // console.log(searchResults);
    this.setState({
      postData: searchResults,
      [e.target.name]: e.target.value
    });
  }

  render() {
    // console.log(this.state.postData);
    const posts = this.state.postData.length > 0 ? 
      this.state.postData.map(post => {
        return <PostContainer key={post.timestamp} post={post} />
      }) :
      null;

    return (
      <div className="App">
        <SearchBar 
          handleSearchInput={this.handleSearchInput}
          searchText={this.state.searchText}
        />
        {posts}
      </div>
    );
  }
}

export default App;
