import { render, screen } from '@testing-library/react';
import { Users } from './users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    // prüft, ob sich das h1-Tag im DOM befindet
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });
  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(4); // 3 ist die Länge des Mock-Response!
  });
});
