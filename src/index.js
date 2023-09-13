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

let dialogs = [
  { id: 1, name: "Dima" },
  { id: 2, name: "Nina" },
  { id: 3, name: "Andrew" },
  { id: 4, name: "Shasha" },
  { id: 5, name: "Artem" },
  { id: 6, name: "Kostya" },
  { id: 7, name: "Roman" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "How are you?" },
  { id: 3, message: "Wahat`s up?" },
  { id: 4, message: "What did you do?" },
  { id: 5, message: "It`s you?" },
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} messages={messages} dialogs={dialogs} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
