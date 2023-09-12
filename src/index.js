import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
let posts = [
  { id: 1, message: "I learn IT-kamasutra", likeCount: 10 },
  { id: 2, message: "My friend learn great IT-course", likeCount: 13 },
  { id: 3, message: "Buy your pig", likeCount: 4 },
  { id: 4, message: "Sell Books. Secon in bill for free!!!", likeCount: 144 },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
