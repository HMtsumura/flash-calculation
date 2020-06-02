import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <Layout />
      <Main />
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Hello
        </a> */}
      {/* </header> */}
    </div>
  );
}

export default App;
