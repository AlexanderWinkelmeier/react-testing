import { render, screen, logRoles } from '@testing-library/react'
import { Skills } from './skills'

describe('skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript']

  // prüft, ob sich ein Listen-Element, d.h. ein ul-Tag im DOM befindet
  test('renders correctly', () => {
    render(<Skills skills={skills} />)

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })
  // prüft, ob sich drei Listen-Einträge, d.h. li-Tags im DOM befinden
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  // prüft, ob sich der Login-Button im DOM befindet
  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', {
      name: 'Login',
    })
    expect(loginButton).toBeInTheDocument()
  })

  // prüft, ob der Start-Learning-Button sich NICHT im DOM befindet
  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // prüft, ob der Start-Learning-Button letztendlich  angezeigt wird
  test('Start Learning button is eventually displayed', async () => {
    const view = render(<Skills skills={skills} />)
    logRoles(view.container)
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument()
  })
})
