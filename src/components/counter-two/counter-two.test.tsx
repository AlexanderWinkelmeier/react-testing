import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { CounterTwo } from './counter-two'

test('renders correctly', () => {
  // übergibt eine Props an <CounterTwo/>
  render(<CounterTwo count={0} />)
  // prüft, ob das h1-Tag im DOM ist
  const textElement = screen.getByText('Counter Two')
  expect(textElement).toBeInTheDocument()
})

test('handlers are called', async () => {
  // einen User aufsetzen
  user.setup()
  // zwei Mocking-Funktionen erstellen
  const incrementHandler = jest.fn()
  const decrementHandler = jest.fn()
  // die Komponente <CounterTwo/> mit ihren Props im DOM rendern
  // zwei Props sind dabei Mocks
  render(
    <CounterTwo
      count={0}
      // hier wird die Übergabe und der Aufruf von zwei Funktionen als Props in der Eltenkomponte simuliert
      handleIncrement={incrementHandler}
      handleDecrement={decrementHandler}
    />
  )
  // prüft, ob die beiden Buttons im DOM sind
  const incrementButton = screen.getByRole('button', { name: 'Increment' })
  const decrementButton = screen.getByRole('button', { name: 'Decrement' })
  // klickt die beiden Button
  await user.click(incrementButton)
  await user.click(decrementButton)
  // prüft, ob diese jeweils einmal aufgerufen wurden
  // (ist als ob zwei Funktionen in der Eltern-Komponente als Props aufgerufen wurden)
  expect(incrementHandler).toHaveBeenCalledTimes(1)
  expect(decrementHandler).toHaveBeenCalledTimes(1)
})
