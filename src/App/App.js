import React, { Component } from 'react';
import CurrentTaco from '../CurrentTaco/CurrentTaco';
import { fetchTaco } from '../Api/ApiCalls'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      taco: {}
    }

  }

  getTaco = (event) => {
    fetchTaco()
    .then(tacoState => this.setState({taco: tacoState}))
    .then(() => console.log(this.state.taco))
     // .then(this.setState({taco}))
     // promise.then(newTaco => this.props.displayTaco(newTaco))
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>It's Taco Time!!</h1>
          <CurrentTaco getTaco={this.getTaco} />
        </header>
      </div>
    );
  }
}

export default App;
