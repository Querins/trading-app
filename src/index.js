import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import { createStore } from "redux";
import root from "./reducers/rootReducer";
import './styles/root.css'

export const initialState = {
    users: [],
    accounts: [],
    currencies: [],
    selectedUser: null
}

const store = createStore(root);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
