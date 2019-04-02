import React from "react";
import ReactDOM from "react-dom";

import Root from "Root";
import App from "./components/App";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
