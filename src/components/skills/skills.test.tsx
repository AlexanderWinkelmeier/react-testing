import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  // prüft, ob sich ein Listen-Element, d.h. ein ul-Tag im DOM befindet
  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });
  // prüft, ob sich drei Listen-Einträge, d.h. li-Tags im DOM befinden
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });
});
