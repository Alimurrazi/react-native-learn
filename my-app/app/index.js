import React, { Component } from "react";
import initStore from "./redux/store";
import { Provider } from "react-redux";
import App from "./App.container";
class NoteTaker extends Component {
  render() {
    return (
      <Provider store={initStore}>
        <App />
      </Provider>
    );
  }
}

export default NoteTaker;
