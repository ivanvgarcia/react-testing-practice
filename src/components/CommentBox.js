import React, { Component } from "react";
import { Textarea, Button } from "react-materialize";
import { connect } from "react-redux";
import { saveComment, fetchComments } from "actions";

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} action="">
          <h3>Write your comment</h3>
          <Textarea onChange={this.handleChange} value={this.state.comment} />
          <Button>Submit</Button>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments }
)(CommentBox);
