import React from 'react';
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import taco3 from '../Assets/taco3.svg';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import CurrentTaco from '../CurrentTaco/CurrentTaco';

const getTaco = jest.fn();
const taco = {
  base_layer: {
    name: "yummy",
    recipe: "cook yummy taco"
  },
  mixin: {
    name: "stuff goes on taco",
    recipe: "cook mixin"
  },
  condiment: {
    name: "spicy stuff",
    recipe: "prep condiment"
  },
  shell: {
    name: "shell",
    recipe: "prep shell"
  }
}

test('Should display an icon)', () => {
  render(
    <BrowserRouter>
      <CurrentTaco getTaco={getTaco} taco={taco}/>
    </BrowserRouter>
  );
  const tacoIcon = screen.getByAltText("taco")
  expect(tacoIcon).toBeInTheDocument();
})

// test getTaco
test("Should invoke fetchTaco function on button click", () => {
  render(
      <BrowserRouter>
        <CurrentTaco getTaco={getTaco} taco={taco}/>
      </BrowserRouter>
  );

  const button = screen.getByRole("button", {name: "Get Me A Different Taco!"}, {exact: false})
  fireEvent.click(button)
  expect(getTaco).toHaveBeenCalledTimes(1);
})
// test that getTaco function invokes onClick of TacoButton
// expect(mockCallback.mock.calls.length).toBe(2);
// test that Taco Name displays on browser
// expect(taco.name).toBeInTheDocument
// test that button text changes and icon changes
// mock out taco
// mock function of getTaco
//




//
