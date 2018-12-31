import React, { Component } from 'react';
import './App.css';
import BannerContainer from './containers/BannerDetails';

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