import React, { Component } from 'react';
import logo from './logo.svg';
import leather_man from './leather_man.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          FUCK YOU
        </p>
        <img src={leather_man}></img>
      </div>
    );
  }
}

export default App;
