import React from 'react';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

function PostContainer(props) {

  return (
    <div className="post-container">
      <Post 
        postUsername={props.post.username} 
        postThumbnailUrl={props.post.thumbnailUrl}
        postImageUrl={props.post.imageUrl}
        postLikes={props.post.likes}
      />
    COMMENT SECTION:
      <CommentSection 
        commentData={props.post.comments}
        postTimestamp={props.post.timestamp} 
      />
    </div>
  );
}

export default PostContainer;