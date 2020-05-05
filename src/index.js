import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const node = document.getElementById("root");

const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. - Samuel Johnson",
    user: "Mark Thomas",
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such.win.",
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it.",
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?",
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework",
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P",
    },
  ],
};

class Post extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "post",
      },
      React.createElement(
        "h2",
        {
          className: "postAuthor",
          id: this.props.id,
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "postBody",
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}
Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

class Comment extends Component {
  render() {
    return React.createElement(
      "div",
      {
        className: "comment",
      },
      React.createElement(
        "h2",
        {
          className: "comentAuthor",
        },
        this.props.user,
        React.createElement(
          "span",
          {
            className: "commentContent",
          },
          this.props.content
        )
      )
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      user: "",
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmint = this.handleSubmint.bind(this);
  }
  handleUserChange(event) {
    this.setState(() => ({
      user: event.target.value,
    }));
  }
  handleTextChange(event) {
    this.setState(() => ({
      content: event.target.value,
    }));
  }
  handleSubmint(event) {
    event.preventDefault();
    this.props.onCommentSubmint({
      user: this.state.user.trim(),
      content: this.state.content.trim(),
    });
    this.setState(() => ({
      user: "",
      text: "",
    }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmint} className="createComment">
        <input
          value={this.state.user}
          onChange={this.handleUserChange}
          placeholder="Your name?"
          type="text"
        />
        <input
          value={this.state.content}
          onChange={this.handleTextChange}
          placeholder="Thoughts?"
          type="text"
        />
        <button type="submit">Post</button>
      </form>
    );
  }
}

CreateComment.propTypes = {
  onCommentSubmint: PropTypes.func.isRequired,
  content: PropTypes.string,
};

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
    };
    this.handleCommentSubmint = this.handleCommentSubmint.bind(this);
  }
  handleCommentSubmint(comment) {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.sesState({
      comments: newComments,
    });
  }

  render() {
    return (
      <div className="commentBox">
        <Post
          id={this.props.post.id}
          content={this.props.post.content}
          user={this.props.post.user}
        />
        {this.state.comments.map(function (comment) {
          return (
            <Comment
              key={comment.id}
              content={comment.content}
              user={comment.user}
            />
          );
        })}
        <CreateComment onCommentSubmint={this.handleCommentSubmint} />
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
};

render(<CommentBox comments={data.comments} post={data.post} />, node);
