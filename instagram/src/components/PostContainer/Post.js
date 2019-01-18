import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import heartIcon from '../../assets/heart.svg';
import commentIcon from '../../assets/comment.png';

const PostHeaderStyled = styled.div`
  padding: 15px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const PostImgStyled = styled.img`
  ${props =>
    props.thumbnail &&
    css`
      border-radius: 25px;
      max-height: 35px;
      margin-right: 15px;
    `
  }

  ${props =>
    props.postImg &&
    css`
      width: 100%;
    `
  }

  ${props =>
    props.footer &&
    css`
      max-height: 25px;
      margin-right: 20px;
      margin-bottom: 5px;
    `
  }

  ${props =>
    props.like &&
    css`
      filter: ${props.filter};
    `
  }
`

const PostFooterStyled = styled.div`
  padding: 15px 0 0 15px;
`

const PostFooterBoldFont = styled.div`
  font-weight: bold;
`

class Post extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      likes: 0,
      userLiked: false,  // hard coded for now, maybe it would come from api call?
      filter: "invert(0)"
    };
  }

  componentDidMount() {
    // this is where api call would go, make sure to update userLiked if that ever gets pulled in from somewhere
    this.setState({
      likes: this.props.postLikes,
    });
  }

  toggleLike(userLiked) {
    // use prevState here to handle likes value
    if (userLiked){
      // console.log("toggleLike OFF");
      // user has already liked, decrement, toggle userLiked
      this.setState(prevState => ({
        likes: --prevState.likes,
        userLiked: false,
        filter: "invert(0)"
      }));
    } else {
      // console.log("toggleLike ON");
      // user has NOT liked, increment likes, toggle userLiked
      this.setState(prevState => ({
        likes: ++prevState.likes,
        userLiked: true,
        filter: "invert(20%) sepia(95%) saturate(6509%) hue-rotate(357deg) brightness(103%) contrast(119%)"
      }));
    }
  }
  
  render() {
    // const likedClass = `liked-${this.state.userLiked}`;

    return (
      <div className="post">
        <PostHeaderStyled className="post-header">
          <PostImgStyled 
            className="post-thumbnail" 
            src={this.props.postThumbnailUrl}
            alt=""
            thumbnail
          />
          {this.props.postUsername}
        </PostHeaderStyled>
        <PostImgStyled
          className="post-img"
          src={this.props.postImageUrl}
          alt=""
          postImg
        />
        <PostFooterStyled className="post-footer">
          <div className="post-footer-icons">
            <PostImgStyled
              className={`post-footer-heart`} // ${likedClass}`}
              src={heartIcon}
              alt=""
              onClick={() => this.toggleLike(this.state.userLiked)}
              filter={this.state.filter}
              footer
              like
            />
            <PostImgStyled
              className="post-footer-comment"
              src={commentIcon}
              alt=""
              footer
            />
          </div>
          <PostFooterBoldFont className="post-footer-likes">
            {this.state.likes} likes
          </PostFooterBoldFont>
        </PostFooterStyled>
      </div>
    );
  }
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