import React, { Component } from "react";
import { Textarea, Button } from "react-materialize";

export default class CommentBox extends Component {
  state = { comment: "" };

  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Call an action creator
    // And save the comment
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
      </div>
    );
  }
}
