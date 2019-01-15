import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Comment from './Comment';

import './CommentSection.css'

function CommentSection(props) {
  const comments = props.commentData.map((commentData, i) => {
    return <Comment key={i} commentData={commentData} />
  });
  return (
    <div className="comment-section">
      {comments}
      <div className="timestamp">
        {moment(props.postTimestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} {/*  "July 17th 2017, 12:42:40 pm" */}
      </div>
      <div className="new-comment-container">
        <form onSubmit={props.addComment}>
          <input 
            type="text" 
            placeholder="Add a comment..."
            name="newCommentText"
            onChange={props.newCommentHandleInput}
            value={props.newCommentValue}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}

CommentSection.propTypes = {
  postTimestamp: PropTypes.string,
  newCommentHandleInput: PropTypes.func,
  newCommentValue: PropTypes.string,
  addComment: PropTypes.func
}

CommentSection.defaultProps = {
  postTimestamp: '',
  newCommentHandleInput: ()=>{},
  newCommentValue: ''
}

export default CommentSection;