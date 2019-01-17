import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainerStyled = styled.div`
  margin: 30px auto 0 auto;
  border: 1px solid #e7e7e7;
  border-radius: 2px;
  box-shadow: 0px 0px 5px lightgray;
  width: 65%;
`

function PostContainer(props) {
  // console.log("postcontainer", props);
  return (
    <PostContainerStyled className="post-container">
      <Post 
        postUsername={props.post.username} 
        postThumbnailUrl={props.post.thumbnailUrl}
        postImageUrl={props.post.imageUrl}
        postLikes={props.post.likes}
      />
      <CommentSection 
        post={props.post}
        commentData={props.post.comments} // shouldn't need this when done
        postTimestamp={props.post.timestamp} // shouldn't need this when done
        currUser={props.currUser}
      />
    </PostContainerStyled>
  );
  
}

export default PostContainer;