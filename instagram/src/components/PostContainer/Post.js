import React from 'react';
import PropTypes from 'prop-types';
import heartIcon from '../../assets/heart.svg';
import commentIcon from '../../assets/comment.png';

import './PostContainer.css';

class Post extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      likes: 0,
      userLiked: false  // hard coded for now, maybe it would come from api call?
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
      console.log("toggleLike OFF");
      // user has already liked, decrement, toggle userLiked
      this.setState(prevState => ({
        likes: --prevState.likes,
        userLiked: false
      }));
    } else {
      console.log("toggleLike ON");
      // user has NOT liked, increment likes, toggle userLiked
      this.setState(prevState => ({
        likes: ++prevState.likes,
        userLiked: true
      }));
    }
  }
  
  render() {
    const likedClass = `liked-${this.state.userLiked}`;

    return (
      <div className="post">
        <div className="post-header">
          <img 
            className="post-thumbnail" 
            src={this.props.postThumbnailUrl}
            alt=""
          />
          {this.props.postUsername}
        </div>
        <img
          className="post-img"
          src={this.props.postImageUrl}
          alt=""
        />
        <div className="post-footer">
          <div className="post-footer-icons">
            <img
              className={`post-footer-heart ${likedClass}`}
              src={heartIcon}
              alt=""
              onClick={() => this.toggleLike(this.state.userLiked)}
            />
            <img
            className="post-footer-comment"
            src={commentIcon}
            alt=""
          />
          </div>
          <div className="post-footer-likes">
            {this.state.likes} likes
          </div>
        </div>
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