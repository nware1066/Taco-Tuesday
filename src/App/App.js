import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import CurrentTaco from '../CurrentTaco/CurrentTaco';
import TacoRecipe from '../TacoRecipe/TacoRecipe';
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
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>It's Taco Time!!</h1>
        </header>
          <Route exact path="/">
            <CurrentTaco getTaco={this.getTaco} taco={this.state.taco}/>
          </Route>
          <Route exact path="/recipe">
            <TacoRecipe />
          </Route>
      </div>
    );
  }
}

export default App;
