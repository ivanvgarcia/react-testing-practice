import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

it("shows a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Write");

  ReactDOM.unmountComponentAtNode(div);
});
