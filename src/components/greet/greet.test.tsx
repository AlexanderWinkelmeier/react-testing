// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name

import { render, screen } from '@testing-library/react';
import Greet from './greet';

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});

test.skip('Greet renders with a name', () => {
  render(<Greet name="John" />);
  const textElement = screen.getByText('Hello John');
  expect(textElement).toBeInTheDocument();
});
