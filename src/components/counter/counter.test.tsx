import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './counter';

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    // ! den User aufsetzen
    user.setup();
    // die Counter-Komponente rendern
    render(<Counter />);
    // prüfen, ob ein Increment-Button im DOM ist
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    // ! diesen Button clicken
    await user.click(incrementButton);
    // prüfen, ob ein heading im DOM ist und einen innerHTMl-Wert von 1 hat
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    await user.click(incrementButton);
    await user.click(incrementButton);
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  });
});
