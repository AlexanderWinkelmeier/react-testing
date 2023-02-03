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

    // prüft die Existenz eines p-Tags anhand seines innerHtml-Textes
    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    // prüft die Existenz eines Image-Elements anhand seines alt-Attribut-Inhalts
    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

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

    // prüft die Existenz des Input-Elements über den Text seines Label
    // da es diesen mehrmals gibt, wird ein selector ausgewählt, der anzeigt, dass das zum Label
    // gehörende input-Element gemeint ist
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(nameElement2).toBeInTheDocument();

    // prüft die Existenz des Input-Elements über den Text seines Placeholder-Attributs
    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    // prüft die Existenz des Input-Elements über den Wert seines Value-Attributs
    const nameElement4 = screen.getByDisplayValue('John');
    expect(nameElement4).toBeInTheDocument();

    // prüft die Existenz des Text-Area-Elements (hat die Rolle 'textbox'!)
    // mit dem Label-Inhalt 'Bio'
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    });
    expect(bioElement).toBeInTheDocument();

    // prüft die Existenz des Select-Elements
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    // prüft die Existenz der Checkbox
    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    // prüft die Existenz der Checkbox über den Text seines Labels
    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions'
    );
    expect(termsElement2).toBeInTheDocument();

    // prüft die Existenz des Submit-Buttons
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
