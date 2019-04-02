import { mount, unmount } from "enzyme";
import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

let component;

beforeEach(() => {
  component = mount(<CommentBox />);
});

afterEach(() => {
  component.unmount();
});

it("has a text area and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
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
