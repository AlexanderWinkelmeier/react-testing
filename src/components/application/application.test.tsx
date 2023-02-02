import { Application } from './Application';
import { render, screen } from '@testing-library/react';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    // prüft die Existenz einer Überschrift mit dem Level 1, d.h. h1-Tag
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    // prüft die Existen einer Überschrift mit dem Level 2, d.h. h2-Tag
    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    // prüft die Existenz des Input-Elements mit type="text"
    // UND dem Label mit dem Inhalt 'Name'
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    });
    expect(nameElement).toBeInTheDocument();

    // prüft die Existenz des Text-Area-Elements (hat die Rolle 'textbox'!)
    // mit dem Label-Inhalt 'Bio'
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

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
