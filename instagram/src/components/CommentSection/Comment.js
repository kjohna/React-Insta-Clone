import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

function Comment(props) {
  // console.log(props); onMouseEnter={commentHover} onMouseLeave={}>
  let nothing = ()=>null;
  let commentMouseEnter = nothing;
  let commentMouseLeave = nothing;
  if (props.currUser === props.commentData.username) {
    commentMouseEnter = props.commentMouseEnter;
    commentMouseLeave = props.commentMouseLeave;
  }
  let deleteCommentClass = "comment-delete-hide"
  if (props.currUser === props.commentData.username) deleteCommentClass = "comment-delete";
  return (
    <div 
      className="comment" 
      onMouseEnter={commentMouseEnter} 
      onMouseLeave={commentMouseLeave}
      commentid={props.commentID}
    > 
      <div className="comment-text">
        <span className="comment-username">
          {props.commentData.username}
        </span>
          {props.commentData.text}
      </div>
      <span className={deleteCommentClass} onClick={props.deleteOnClick}>
      ×
      </span>
    </div>
  );
}

Comment.propTypes = {
  commentData: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
    timestamp: PropTypes.string
  })
}

Comment.defaultProps = {
  commentData: {
    username: '',
    text: '',
    timestamp: ''
  }
}

export default Comment;