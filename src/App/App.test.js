import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('has Taco Time header', () => {
  const { getByText } = render(<App />);
  const header = getByText("It's Taco Time!!");
  expect(header).toBeInTheDocument();
});


//
