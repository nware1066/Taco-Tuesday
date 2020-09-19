import React from 'react';

 export const fetchTaco = () => {
   return fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
   .then(res => res.json())
  }
