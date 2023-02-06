import { render, screen } from '@testing-library/react';
import { MuiMode } from './mui-mode';
import { AppProviders } from '../../providers/app-providers';

describe('MuiMode', () => {
  test('renders text correctly', () => {
    // <MuiMode /> befindet sich im wrapper AppProviders
    // bevor MuiMode gerendert wird, wird es in AppProvider gewrappt
    render(<MuiMode />, { wrapper: AppProviders });
    const headingElement = screen.getByRole('heading');
    // prüft, ob das h-Tag den innerHtml-Content 'dark mode' hat
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
