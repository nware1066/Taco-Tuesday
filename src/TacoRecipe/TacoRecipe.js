import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import './tacoRecipe.css';
import taco4 from '../Assets/taco4.svg'
import favorite from '../Assets/favorite.svg'
import notFavorite from '../Assets/not-favorite.svg'

function TacoRecipe(props) {
  if (props.taco.base_layer) {
    return (
      <div className="recipe-container">
      <h1>{props.taco.base_layer.name} Taco</h1>
      <img src={taco4} className="taco-icon" alt="taco"/>
      <Link to="/"><button className="return-home">Take me back!</button></Link>
      </div>
    )
  } else {
    return (
      "You didn't pick a taco, yet!"
    )
  }
}


export default TacoRecipe;
