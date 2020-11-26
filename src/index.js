import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";
import EntryPoint from "./entry-point/EntryPoint";

ReactDOM.render(
  <BrowserRouter>
    <EntryPoint />
  </BrowserRouter>,
  document.getElementById("root")
);
