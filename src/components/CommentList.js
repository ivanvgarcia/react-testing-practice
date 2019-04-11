import React, { Component } from "react";
import { CollectionItem } from "react-materialize";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <CollectionItem key={comment}>{comment}</CollectionItem>;
    });
  }
  render() {
    return <div>{this.renderComments()}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
