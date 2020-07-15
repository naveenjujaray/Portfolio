import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./containers/Main";
require('dotenv').config()

function App() {
  return (
    console.log(process.env.REACT_APP_GITHUB_TOKEN);
    <div>
      <Main />
    </div>
  );
}

export default App;
