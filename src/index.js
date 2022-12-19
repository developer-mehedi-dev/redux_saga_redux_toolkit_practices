import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import dogReducer from "./dogState";
import dogSaga from "./dogSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    dogs: dogReducer,
  },
  middleware: [saga],
});
saga.run(dogSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
