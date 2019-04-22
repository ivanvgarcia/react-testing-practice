import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import Navigation from "./layout/Navigation";
import { Row, Col, Collection } from "react-materialize";

const App = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <CommentBox />
      <Row>
        <Col m={10} s={12} offset={"m1"}>
          <Collection>
            <CommentList />
          </Collection>
        </Col>
      </Row>
    </div>
  );
};

export default App;
