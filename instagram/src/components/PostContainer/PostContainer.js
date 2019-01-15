import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      commentData: props.post.comments,
      newCommentText: ""
    };
    this.props = props;
  }

  handleInput = (e) => {
    // console.log("handleInput", e.target.name, e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  addComment = (e) => {
    // handler function to add comment
    e.preventDefault();
    this.setState(
      {
        commentData: [
          ...this.state.commentData,
          {
            username: "testusername",
            text: this.state.newCommentText
          }
        ],
        newCommentText: "" // reset input text
      }
    );
  }

  render () {
    return (
      <div className="post-container">
        <Post 
          postUsername={this.props.post.username} 
          postThumbnailUrl={this.props.post.thumbnailUrl}
          postImageUrl={this.props.post.imageUrl}
          postLikes={this.props.post.likes}
        />
        <CommentSection 
          commentData={this.state.commentData}
          postTimestamp={this.props.post.timestamp}
          newCommentHandleInput={this.handleInput}
          newCommentValue={this.state.newCommentText}
          addComment={this.addComment}
        />
      </div>
    );
  }
}

export default PostContainer;