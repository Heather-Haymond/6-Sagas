let app = require('../server')
let testServer = require('supertest')
const { resetTestDatabase, executeSqlFile } = require('./__utils__/db-setup.js')

beforeAll(async () => {
    // Silence console.log statements for cleaner test output:
    console.log = () => {}
  
    // Prepare a fresh prime_testing database:
    await resetTestDatabase()

    // Execute the commands found in treats.sql, in order to:
      // Create the treats table.
      // Insert data into the treats table.
    await executeSqlFile('database.sql')
  })

  afterAll(async () => {
    app.closeServer()
  })

describe('Router Tests', () => {
  it('Should respond to GET /zoo', async (done) => {
    const animalA = {
        id: 1,
        species_name: 'Blue Spiny Lizard',
        class_name: 'Reptile'
    }

    const animalB = {
        id: 2,
        species_name: 'Murray River Turtle',
        class_name: 'Reptile'
    }

    let response = await request(app).get('/treats');
    expect(response.statusCode).toBe(200);
    expect(response.body).toContainEqual(animalA);
    expect(response.body).toContainEqual(animalB);
    done();
  })
})