import React from 'react';
import { MemoryRouter, BrowserRouter, Route, Link } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';


test('has Taco Time header', () => {
  const { getByText } = render(

    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const header = getByText("It's Taco Time!!");
  expect(header).toBeInTheDocument();
});


// try mockFn.mockReturnValueOnce(value) to test returned values for fetchTaco (value should display in browser)

//
