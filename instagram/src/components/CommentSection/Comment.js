import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css';

function Comment(props) {
  // console.log(props);
  return (
    <div className="comment">
      <span className="comment-username">
        {props.commentData.username}
      </span>
        {props.commentData.text}
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