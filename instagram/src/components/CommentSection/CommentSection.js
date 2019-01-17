import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';

import './CommentSection.css'

class CommentSection extends React.Component {
  constructor(props){
    super();
    this.props = props;
    // console.log("comment section", props);
    this.state = {
      commentData: [],
      post: {},
      newCommentText: "",
      user: this.props.user
    };
  }

  componentDidMount() {
    // console.log("comment section CDM ")
    this.setState({
      commentData: this.props.post.comments,
      post: this.props.post
    });
  }

  handleInput = (e) => {
    // console.log("handleInput", e.target.name, e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  addNewComment = (e) => {
    // handler function to add comment
    e.preventDefault();
    // console.log("addNewcomment", this.state.post.comments);
    const updatedPost = this.state.post;
    updatedPost.comments = [...this.state.post.comments,
      {
        username: this.state.user,
        text: this.state.newCommentText
      }
    ];
    this.setState(
      {
        updatedPost,
        newCommentText: "" // reset input text
      }
    );
  }  

  render() {
    // console.log("comment section state ", Object.keys(this.state.post).length);
    const comments = Object.keys(this.state.post).length ?
      this.state.post.comments.map((commentData, i) => {
        return <Comment key={i} commentData={commentData} />
      }) :
      null;

    // console.log("commentSection render");
    return (
      <div className="comment-section">
        {comments}
        <div className="timestamp">
          {moment(this.props.postTimestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} {/*  "July 17th 2017, 12:42:40 pm" */}
        </div>
        <div className="new-comment-container">
          <form onSubmit={this.addNewComment}>
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
  postTimestamp: PropTypes.string
}

CommentSection.defaultProps = {
  postTimestamp: ''
}

export default CommentSection;