import React from 'react';
import taco3 from '../Assets/taco3.svg';
import taco2 from '../Assets/taco2.svg';

function CurrentTaco(props) {
  if(props.taco.base_layer) {
    return (
      <section>
        <img src={taco2} />
        <p>{props.taco.base_layer.name} Taco</p>
      </section>
    )
  } else {
    return (
      <section>
      <img src={taco3} className="App-logo" alt="logo" />
      <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Taco!</button>
      </section>
    )
  }
    }

export default CurrentTaco;
