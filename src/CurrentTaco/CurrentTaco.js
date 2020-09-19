import React from 'react';
import './currentTaco.css'
import taco3 from '../Assets/taco3.svg';
import taco2 from '../Assets/taco2.svg';

function CurrentTaco(props) {
  if(props.taco.base_layer) {
    return (
      <section>
        <h1>{props.taco.base_layer.name} Taco</h1>
        <img src={taco2} className="taco-icon" alt="taco"/>
        <p>{props.taco.base_layer.name}</p>
        {props.taco.mixin &&
          <p>with {props.taco.mixin.name}</p>
        }
        {props.taco.condiment &&
          <p>and {props.taco.condiment.name}</p>
        }
        {props.taco.shell &&
          <p>on {props.taco.shell.name}</p>
        }
        <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Different Taco!</button>

      </section>
    )
  } else {
    return (
      <section>
      <img src={taco3} className="taco-icon" alt="taco" />
      <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Taco!</button>
      </section>
    )
  }
    }

export default CurrentTaco;
