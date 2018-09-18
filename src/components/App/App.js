import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import CatSelect from '../CatSelect/CatSelect';
import TabSelect from '../TabSelect/TabSelect';
import Content from '../Content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Prosjekt 2</h1>
        </header>
        <CatSelect />
        <TabSelect />
        <Content />
      </div>
    );
  }
}

export default App;
