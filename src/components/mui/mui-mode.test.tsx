import { render, screen } from '../../test-utils'
import { MuiMode } from './mui-mode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    // prüft, ob das h-Tag den innerHtml-Content 'dark mode' hat
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
