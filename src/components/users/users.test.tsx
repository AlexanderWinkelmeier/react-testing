import { render, screen } from '@testing-library/react';
import { Users } from './users';
import { server } from '../../mocks/server';
import { rest } from 'msw';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    // prüft, ob sich das h1-Tag im DOM befindet
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });
  // Mocking http-Request mit MSW
  test('renders a list of users', async () => {
    render(<Users />);
    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(3); // 3 ist die Länge des Mock-Response!
  });
  // prüfen, ob das Error-Handling funktioniert
  test('renders error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );
    render(<Users />);
    const error = await screen.findByText('Error fetching users'); // Zeile 15 in users.tsx
    expect(error).toBeInTheDocument();
  });
});
