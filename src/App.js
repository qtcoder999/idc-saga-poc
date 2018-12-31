import React, { Component } from 'react';
import './App.css';
import BannerDetails from './containers/BannerDetails/BannerDetails';
import CounterDetails from './containers/CounterDetails/CounterDetails'

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