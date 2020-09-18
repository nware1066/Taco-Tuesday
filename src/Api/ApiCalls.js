import React from 'react';

 export const fetchTaco = () => {
   return fetch("http://taco-randomizer.herokuapp.com/random/")
   .then(res => res.json())
  }
