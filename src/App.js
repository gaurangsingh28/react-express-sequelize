import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import dubeyPic from "./static/media/dubeyPic.svg"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Kela Bhaiya</h1>
        </header>
        <img src={dubeyPic} height="640px" alt="Dubey Pic" />
      </div>
    );
  }
}

export default App;
