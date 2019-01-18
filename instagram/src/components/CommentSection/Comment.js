import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentStyled = styled.div`
  padding-bottom: 5px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`
const CommentTextStyled = styled.div`
  width: 90%;
`
const CommentUsernameStyled = styled.span`
  font-weight: bold;
  margin-right: 5px;
`
const CommentDeleteStyled = styled.span`
  display:none;
`

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
    <CommentStyled 
      className="comment" 
      onMouseEnter={commentMouseEnter} 
      onMouseLeave={commentMouseLeave}
      commentid={props.commentID}
    > 
      <CommentTextStyled className="comment-text">
        <CommentUsernameStyled className="comment-username">
          {props.commentData.username}
        </CommentUsernameStyled>
          {props.commentData.text}
      </CommentTextStyled>
      <CommentDeleteStyled className={deleteCommentClass} onClick={props.deleteOnClick}>
      ×
      </CommentDeleteStyled>
    </CommentStyled>
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