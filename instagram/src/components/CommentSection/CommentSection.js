import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import Comment from './Comment';

const CommentSectionStyled = styled.div`
  padding: 15px 15px 0 15px;
`
const TimeStampStyled = styled.div`
  color: #9c9c9c;
  font-size: 14px;
  padding: 5px 0 10px 0;
`
const NewCommentContainerStyled = styled.div`
  width: 100%;
  border-top: 1px solid #e7e7e7;
`
const NewCommentInput = styled.input`
  width: 100%;
  height: 50px;
  color: #9c9c9c;
  font-size: 14px;
  border: none;

  &:focus {
    color: black;
    outline: none;
    box-shadow: 0px 0px 5px gray;
  }
`

class CommentSection extends React.Component {
  constructor(props){
    super();
    this.props = props;
    // console.log("comment section", props);
    this.state = {
      commentData: [],
      post: {},
      newCommentText: "",
      currUser: this.props.currUser
    };
  }

  componentDidMount() {
    // console.log("comment section CDM ")
    this.setState({
      commentData: this.props.post.comments,
      post: this.props.post
    });
  }

  handleInput = (e) => {
    // console.log("handleInput", e.target.name, e.target.value);
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    );
  }

  addNewComment = (e) => {
    // handler function to add comment
    e.preventDefault();
    // console.log("addNewcomment", this.state.post.comments);
    const updatedPost = this.state.post;
    updatedPost.comments = [...this.state.post.comments,
      {
        username: this.state.currUser,
        text: this.state.newCommentText
      }
    ];
    this.setState(
      {
        updatedPost,
        newCommentText: "" // reset input text
      }
    );
  }

  commentMouseEnter = (e) => {
    // console.log("comment mouse enter ", e.target);
  }

  commentMouseLeave = (e) => {
    // console.log("comment mouse leave ", e.target);
  }

  commentDelete = (e) => {
    // console.log("comment delete click ", e.target);
  }

  render() {
    // console.log("comment section state ", Object.keys(this.state.post).length);
    const comments = Object.keys(this.state.post).length ?
      this.state.post.comments.map((commentData, i) => {
        return <Comment 
          key={`${i}${commentData.userName}`} 
          commentID={`${i}${commentData.userName}`} 
          commentData={commentData} 
          currUser={this.props.currUser}
          commentMouseEnter={this.commentMouseEnter}
          commentMouseLeave={this.commentMouseLeave}
          deleteOnClick={this.commentDelete}
          />
      }) :
      null;

    // console.log("commentSection render");
    return (
      <CommentSectionStyled className="comment-section">
        {comments}
        <TimeStampStyled className="timestamp">
          {moment(this.props.postTimestamp, 'MMMM Do YYYY, hh:mm:ss a').fromNow()} {/*  "July 17th 2017, 12:42:40 pm" */}
        </TimeStampStyled>
        <NewCommentContainerStyled className="new-comment-container">
          <form onSubmit={this.addNewComment}>
            <NewCommentInput 
              type="text" 
              placeholder="Add a comment..."
              name="newCommentText"
              onChange={this.handleInput}
              value={this.state.newCommentText}
              autoComplete="off"
            />
          </form>
        </NewCommentContainerStyled>
      </CommentSectionStyled>
    );
  }
}

CommentSection.propTypes = {
  postTimestamp: PropTypes.string
}

CommentSection.defaultProps = {
  postTimestamp: ''
}

export default CommentSection;