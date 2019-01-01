import React, { Component } from 'react';
import './App.css';
import Bannerdetails from './containers/bannerdetails1/bannerdetails1';
import CounterDetails from './containers/counterdetails1/counterdetails1'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Bannerdetails/>
          <CounterDetails/>
      </div>
    );
  }
}

export default App;