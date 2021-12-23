import "./App.css";

import * as React from "react";
import HelloGoodbye from "@adam-deps/c";

import useConfig from "./components/useConfig";
import logo from "./logo.svg";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to {config.app.TITLE}</h1>
      </header>
      <p className="App-intro">
        To get started, edit yo <code>src/browser/App.jsx</code> and save to reload.
      </p>
      <HelloGoodbye />
    </div>
  );
}
