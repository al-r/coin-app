import React, { Component } from 'react';
import './App.css';
import AmountInput from './AmountInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1 className="App-title">Cointing</h1>
          </header>
          <AmountInput />
        </div>
      </div>
    );
  }
}

export default App;
