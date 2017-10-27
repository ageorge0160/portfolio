import React, { Component } from 'react';
import './App.css';
import Home from './containers/home';
import Navbar from './containers/navbar';
import About from './containers/about';
import Background from './containers/background'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Background />
        <About />
      </div>
    );
  }
}

export default App;
