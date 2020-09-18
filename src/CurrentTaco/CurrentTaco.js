import React from 'react';
import taco3 from '../Assets/taco3.svg';

function CurrentTaco(props) {
      return (
        <section>
          <img src={taco3} className="App-logo" alt="logo" />
          <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Taco!</button>
        </section>
      )
    }

export default CurrentTaco;
