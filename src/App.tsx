import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { Button } from "antd";
import { IndexRouter } from "../src/router/IndexRouter";
// import { store,persistor } from './redux/store'
// import { PersistGate } from 'redux-persist/integration/react'
function App() {
  return;
  // <Provider store={store}>
  // <PersistGate loading={null} persistor={persistor}>
  <IndexRouter></IndexRouter>;
  {
    /* </PersistGate> */
  }
  // </Provider>
}

export default App;
