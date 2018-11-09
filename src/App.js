import React, { Component } from 'react';
import './App.css';
import Global_header from './Global_header';
import Link_header from './Link_header';
import Navigation from './Navigation';
import BigImage from './BigImage';
import SecondHeader from './SecondHeader';
import MidPart from './MidPart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global_header />
        <Link_header />
        <Navigation />
        <BigImage />
        <SecondHeader />
        <MidPart />
      </div>
    );
  }
}

export default App;
