import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import store from "./store";

import { addTodo} from "./actions/actions";

store.dispatch(addTodo("Task 1 (Try clicking me!)"))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
