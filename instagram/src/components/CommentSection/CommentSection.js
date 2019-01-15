import React from 'react';
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
        <form>
          <input type="text" placeholder="Add a comment..."/>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;