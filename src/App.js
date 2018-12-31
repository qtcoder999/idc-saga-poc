import React, { Component } from 'react';
import './App.css';
import BannerDetails from './containers/bannerDetails/bannerDetails';
import CounterDetails from './containers/counterDetails/counterDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BannerDetails/>
          <CounterDetails/>
      </div>
    );
  }
}

export default App;