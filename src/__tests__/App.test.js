import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Navigation searchBar rendered', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Freightera API Location Finder/i);
  expect(linkElement).toBeInTheDocument();
});

test('Data Table rendered', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/City/i);
  expect(linkElement).toBeInTheDocument();
});
