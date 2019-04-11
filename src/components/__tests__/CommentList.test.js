import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "Root";
import { CollectionItem } from "react-materialize";

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

it("creates one Collection Item per comments.", () => {});
