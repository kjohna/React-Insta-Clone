import React, { Component } from 'react';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

import './PostContainer.css';

class PostsPage extends Component {
  constructor(props){
    super();
    this.props = props;
    this.state = {
      postData: [],
      searchText: '',
      currUser: ""
    }
  }

  componentDidMount() {
    // console.log("posts page CDM");
    // if we were using an api to get post data, it would happen here:
    let postData = dummyData;
    localStorage.getItem('instaCloneData') ? 
      postData = JSON.parse(localStorage.getItem('instaCloneData')) :
      localStorage.setItem('instaCloneData', JSON.stringify(postData));
    // the fetch would call next line once the 'message' data was returned
    this.setState({
      postData: postData,
      currUser: localStorage.getItem('instaCloneUser')
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
    console.log("PostsPage: render");
    const posts = this.state.postData.length > 0 ? 
      this.state.postData.map(post => {
        return <PostContainer key={post.timestamp} post={post} currUser={this.state.currUser}/>
      }) :
      null;

    return (
      <div className="posts-page" currUser={this.state.currUser}>
        <SearchBar 
          handleSearchInput={this.handleSearchInput}
          searchText={this.state.searchText}
        />
        {posts}
      </div>
    );
  }
}

export default PostsPage;
