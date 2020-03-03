import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App2 from "./components/App2";
import TableList from "./components/MainPanel/UserInfo/TableComponents/TableList";
import * as serviceWorker from "./serviceWorker";
import StoreService from "./services/store-service";
import { StoreServiceProvider } from "./components/store-service-context";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import Login from "./pages/Login";

const storeService = new StoreService();

ReactDOM.render(
  <Provider store={store}>
    <StoreServiceProvider value={storeService}>
      <Router>
        <App2 />
      </Router>
    </StoreServiceProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
