import React from 'react';
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
        {props.postTimestamp}
      </div>
      <div className="new-comment-container">
        <form>
          <input type="text" placeholder="Add a comment..."/>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;