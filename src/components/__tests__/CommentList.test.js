import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";

let component;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comments.", () => {
  console.log(component.find("li").length);
});
