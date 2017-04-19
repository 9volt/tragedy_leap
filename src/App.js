import React, { Component } from 'react';
import logo from './logo.svg';
import leather_man from './leather_man.png';
import './App.css';

import fuck_you from './fuckyou_1.mp3';

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
        <audio src={fuck_you} autoPlay>No audio support ;_;</audio>
      </div>
    );
  }
}

export default App;
