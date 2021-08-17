import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Users from "./components/Users";

const subjects = ["ddi", "web"];
const languages = { python: false, c: true };

ReactDOM.render(
  <React.StrictMode>
    <App
      name="Cindy"
      lastname="Yazán"
      age={21}
      languages={languages}
      subjects={subjects}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
