import React from "react";
import reportWebVitals from "./reportWebVitals";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import store from "./components/redux/state";
import "./index.css";
import App from "./App";

  const root = ReactDOM.createRoot(document.getElementById("root"));


let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());



store.subscribe(renderEntireTree);





reportWebVitals();
