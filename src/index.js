import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { pokeReducer } from "./reducer/Reducer";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./middlewares/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger) 
  );

  //compose() y applyMiddleware() son funciones que vienen por defecto en el redux

const store = createStore(pokeReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
