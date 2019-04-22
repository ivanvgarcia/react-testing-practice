import { mount, unmount } from "enzyme";
import React from "react";
import Root from "Root";
import CommentBox from "components/CommentBox";
import "materialize-css/dist/css/materialize.min.css";

let component;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it("has a text area and two buttons", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(2);
});

describe("the text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    component.update();
  });

  it("has a text area that user can type in", () => {
    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("empties text area when form is submitted", () => {
    component.find("form").simulate("submit");
    component.update();
    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
