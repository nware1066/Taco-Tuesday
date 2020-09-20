import React from 'react';
import taco3 from '../Assets/taco3.svg';
import { render, screen } from '@testing-library/react';
import CurrentTaco from '../CurrentTaco/CurrentTaco';

test('Should display a button and an icon)', () => {
  render(
    <section className="Current-taco-container">
      <img src={taco3} className="taco-icon" alt="taco" />
      <button className="taco-button" onClick={ event => props.getTaco(event)}>Get Me A Taco!</button>
    </section>
  );
  const button = screen.getByRole("button");
  const tacoIcon = screen.getByAltText("taco")
  expect(tacoIcon).toBeInTheDocument();
  expect(button).toBeInTheDocument();
})

//
