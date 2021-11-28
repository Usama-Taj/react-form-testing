import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import "module";
import thunk from "redux-thunk";
const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
