import React, { Component } from 'react';
import CurrentTaco from '../CurrentTaco/CurrentTaco';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>It's Taco Time!!</h1>
          <CurrentTaco />
        </header>
      </div>
    );
  }
}

export default App;
