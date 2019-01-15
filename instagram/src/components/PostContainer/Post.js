import React from 'react';
import PropTypes from 'prop-types';
import heartIcon from '../../assets/heart.svg';
import commentIcon from '../../assets/comment.png';

import './PostContainer.css';

function Post(props) {

  return (
    <div className="post">
      <div className="post-header">
        <img 
          className="post-thumbnail" 
          src={props.postThumbnailUrl}
          alt=""
        />
        {props.postUsername}
      </div>
      <img
        className="post-img"
        src={props.postImageUrl}
        alt=""
      />
      <div className="post-footer">
        <div className="post-footer-icons">
          <img
            className="post-footer-heart"
            src={heartIcon}
            alt=""
          />
          <img
          className="post-footer-comment"
          src={commentIcon}
          alt=""
        />
        </div>
        <div className="post-footer-likes">
          {props.postLikes} likes
        </div>
      </div>
    </div>
  );
}

Post.propTypes = {
  postUsername: PropTypes.string,
  postThumbnailUrl: PropTypes.string,
  postImageUrl: PropTypes.string,
  postLikes: PropTypes.number
}

Post.defaultProps = {
  postUsername: '',
  postThumbnailUrl: '',
  postImageUrl: '',
  postLikes: 0
}

export default Post;