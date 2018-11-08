import React, { Component } from 'react';
import './App.css';
import Global_header from './Global_header';
import Link_header from './Link_header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global_header />
        <Link_header />
      </div>
    );
  }
}

export default App;
