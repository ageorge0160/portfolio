import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './containers/header';
import Navbar from './containers/navbar';
import About from './containers/about';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
      </div>
    );
  }
}

export default App;
