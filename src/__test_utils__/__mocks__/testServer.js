import { rest } from 'msw'
import { setupServer } from 'msw/node'

// Mock data that we want GET /zoo to respond with:
export const zooAnimals = [
  {
      id: 1,
      species_name: 'Aardvark',
      class_name: 'Mammal'
  },
  {
      id: 2,
      species_name: 'Zebra Finch',
      class_name: 'Bird'
  }
]

// Array of all of the routes our mock server implements:
const mockRoutes = [
  rest.get('/zoo', async (req, res, ctx) => {
    return res(ctx.json(zooAnimals))
  })
]

// This creates our test server. We import it and turn it on
// over in setupTests.js:
const testServer = setupServer(...mockRoutes)

export { testServer }
