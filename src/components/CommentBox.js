import React, { Component } from "react";
import { Textarea, Button } from "react-materialize";

export default class CommentBox extends Component {
  render() {
    return (
      <div className="container">
        <h3>Write your comment</h3>
        <Textarea />
        <Button>Submit</Button>
      </div>
    );
  }
}
