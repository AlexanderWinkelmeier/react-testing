import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // prüft die Existenz des Input-Elements mit type="text"
    const nameElement = screen.getByRole('textbox');
    expect(nameElement).toBeInTheDocument();

    // prüft die Existenz des Select-Elements
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    // prüft die Existen der Checkbox
    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    // prüft die Existenz des Submit-Buttons
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
