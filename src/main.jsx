import React from "react";
import { createRoot } from "react-dom/client";
//import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";


//ReactDOM.createRoot(document.getElementById("root")).render(
  const root = createRoot(document.getElementById("root")); // ✅ Используем createRoot
  root.render(
  <Provider store={store}>
    <BrowserRouter> {/* Тут объявляем Router */}
      <App />
    </BrowserRouter>
  </Provider>
);