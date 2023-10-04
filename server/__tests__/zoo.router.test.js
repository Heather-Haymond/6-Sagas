require('jest-expect-message');
let request = require('supertest')
let pool = require('../modules/pool');
let app = require('../server');
const { resetTestDatabase, executeSqlFile } = require('./__utils__/db-setup.js');


describe('GET /zoo', () => {
    let mockedPool;

    beforeAll(async () => {
        console.log = () => {};

        // Silence console.log statements for cleaner test output:
        console.log = () => { }
        // Prepare a fresh prime_testing database:
        await resetTestDatabase();

        // Execute the commands found in treats.sql, in order to:
        // Create the treats table.
        // Insert data into the treats table.
        await executeSqlFile('../database.sql');
    })

    beforeEach(() => {
        mockedPool = jest.spyOn(pool, 'query');
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    afterAll(() => {
        app.close();
    })
    
    const errorOutputOptions = {
      showPrefix: false,
      showMatcherMessage: false
    }

    it('Uses the pool module to query the database', async () => {
      let response;
      //Trying to avoid 5000ms error message...
      try {
          app.setTimeout(500)
          response = await request(app).get('/zoo')
      } catch (error) {
          expect(
            error,
            `Make sure you're sending a response!`,
            errorOutputOptions
          ).toBeNull()
          //stop the tests!
          return;
      }

      expect(mockedPool).toHaveBeenCalledTimes(1);
    })

    it('Responds with status 200 if pool.query was successful', async () => {
      let response;
      //Trying to avoid 5000ms error message...
      try {
          app.setTimeout(500)
          response = await request(app).get('/zoo')
      } catch (error) {
          expect(
            error,
            `Make sure you're sending a response!`,
            errorOutputOptions
          ).toBeNull()
          //stop the tests!
          return;
      }

      expect(response.status).toEqual(200);
    })

    it('Responds with an array of 20 zoo animal objects, where each has a species_name and corresponding class_name', async () => {
        const animalA = {
            species_name: 'Blue Spiny Lizard',
            class_name: 'Reptile'
        }
        const animalB = {
            species_name: 'Moutain Goat',
            class_name: 'Mammal'
        }

        let response;
        //Trying to avoid 5000ms error message...
        try {
            app.setTimeout(500)
            response = await request(app).get('/zoo')
        } catch (error) {
            expect(
              error,
              `Make sure you're sending a response!`,
              errorOutputOptions
            ).toBeNull()
            //stop the tests!
            return;
        }

        expect(
          response.body.length,
          `All 20 rows from the species table should be in the response!`,
          errorOutputOptions
        ).toEqual(20);
        
        expect(
          response.body,
          `Each object in the array needs to have a species_name and class_name!`,
          errorOutputOptions
        ).toEqual(
          expect.arrayContaining([
            expect.objectContaining(animalA),
            expect.objectContaining(animalB),
          ]),
        )
    })

    it('Responds with status 500 if there is an error', async () => {
        mockedPool.mockImplementation(() => {
            return Promise.reject('Pool Error')
        })

        const response = await request(app).get('/zoo')
        expect(response.status).toEqual(500);
    })
})
