import React, { Component } from 'react';
import './App.css';
import BannerContainer from './components/banner'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BannerContainer/>
      </div>
    );
  }
}

export default App;
