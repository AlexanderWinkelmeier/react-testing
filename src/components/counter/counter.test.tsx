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

  test('renders a count of 10 after clicking the set button', async () => {
    // einen User aufsetzen
    user.setup();
    // die Counter-Komponente rendern
    render(<Counter />);
    // prüfen, ob das Input-Element vom Typ number im DOM ist
    const amountInput = screen.getByRole('spinbutton');
    // in das Input-Feld die Zahl 10 einfügen/schreiben (type)
    await user.type(amountInput, '10');
    // prüfen, ob das Input-Element den Wert 10 enthält
    expect(amountInput).toHaveValue(10);

    // prüfen, ob der Set-Button im DOM ist
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    expect(setButton).toBeInTheDocument();
    // den Button drücken
    await user.click(setButton);
    // das heading-Tag finden und prüfen, ob es den innerHTML-Wert 10 hat
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10');
  });
  test('elements are focused in the right order', async () => {
    // User aufsetzen
    user.setup();
    // Counter-Komponente rendern
    render(<Counter />);
    // die zwei Buttons und das Input-Element im DOM finden
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    });
    const amountInput = screen.getByRole('spinbutton');
    const setButton = screen.getByRole('button', {
      name: 'Set',
    });
    // dreimal hintereinander die Tabulator-Taste drücken und überprüfen,
    // ob zuerst der increment-Button, dann das Input-Element und schließlich
    // der setButton fokusiert werden
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(amountInput).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
