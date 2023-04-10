import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "antd/dist/antd.css";
import Store from "./app/store";
import { Provider } from "react-redux";
import { AppProvider } from "./context";
ReactDom.render(
  <Router>
    <Provider store={Store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
