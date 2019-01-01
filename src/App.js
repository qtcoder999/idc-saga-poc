import React, { Component } from 'react';
import './App.css';
import Bannerdetails from './containers/bannerdetails/bannerdetails';
import CounterDetails from './containers/counterdetails/counterdetails'

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