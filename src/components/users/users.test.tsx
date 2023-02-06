import { render, screen } from '@testing-library/react';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    // prüft, ob sich das h1-Tag im DOM befindet
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });
});
