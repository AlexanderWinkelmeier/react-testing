// rest, da hier eine REST-API gemockt wird
import { rest } from 'msw'

export const handlers = [
  // echte http-Adresse: 'https://jsonplaceholder.typicode.com/users'
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    // aber gemockter Response
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Michael Caine',
        },
      ])
    )
  }),
]
