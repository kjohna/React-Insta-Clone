import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';

import './CommentSection.css'

class CommentSection extends React.Component {
  constructor(props){
    super();
    this.props = props;
    // console.log("commentsection", props);
    this.state = {
      commentData: this.props.commentData,
      newCommentText: ""
    };
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
    console.log("addcomment", this.state.newCommentText);
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

  render() {
    const comments = this.state.commentData.map((commentData, i) => {
      return <Comment key={i} commentData={commentData} />
    });
    console.log("commentSection render");
    return (
      <div className="comment-section">
        {comments}
        <div className="timestamp">
          {moment(this.props.postTimestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} {/*  "July 17th 2017, 12:42:40 pm" */}
        </div>
        <div className="new-comment-container">
          <form onSubmit={this.addComment}>
            <input 
              type="text" 
              placeholder="Add a comment..."
              name="newCommentText"
              onChange={this.handleInput}
              value={this.state.newCommentText}
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  postTimestamp: PropTypes.string,
  newCommentValue: PropTypes.string
}

CommentSection.defaultProps = {
  postTimestamp: ''
}

export default CommentSection;