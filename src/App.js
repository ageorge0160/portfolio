import React, { Component } from 'react';
import './App.css';
import Navbar from './containers/navbar';
import About from './containers/about';
import Background from './containers/background';
import FeatureWork from './containers/featurework';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Background />
        <About />
        <FeatureWork />
      </div>
    );
  }
}

export default App;
