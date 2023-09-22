let app = require('../server')
let request = require('supertest')
const { resetTestDatabase, executeSqlFile } = require('./utils/db-setup.js')
let pool = require('../modules/pool')
require('jest-expect-message');

describe('Router Tests', () => {
    let mockedPool;

    beforeAll(async () => {
        // Silence console.log statements for cleaner test output:
        // console.log = () => { }
        // Prepare a fresh prime_testing database:
        await resetTestDatabase()

        // Execute the commands found in treats.sql, in order to:
        // Create the treats table.
        // Insert data into the treats table.
        await executeSqlFile('../database.sql')
    })
    beforeEach(() => {
        mockedPool = jest.spyOn(pool, 'query')

    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    afterAll(() => {
        app.close();
    })
    


    it('Should respond to GET /zoo', async () => {
        const animalA = {
            species_name: 'Blue Spiny Lizard',
            class_name: 'Reptile'
        }

        const animalB = {
            species_name: 'Murray River Turtle',
            class_name: 'Reptile'
        }

        let response;
        //Trying to avoid 5000ms error message...
        try {
            app.setTimeout(500)
            response = await request(app).get('/zoo')

        } catch (error) {
            expect(error,
                `Make sure you're sending a response!`,
                {
                    showPrefix: false,
                    showMatcherMessage: false,
                }).toBeNull()
            //stop the tests!
            return;
        }

        expect(mockedPool).toHaveBeenCalledTimes(1);

        expect(response.status).toEqual(200);

        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining(animalA),
                expect.objectContaining(animalB),
            ])
        )
    })

    it('should return 500 if there is an error', async () => {
        mockedPool.mockImplementation(() => {
            return Promise.reject('Pool Error')
        })

        const response = await request(app).get('/zoo')

        expect(response.status).toEqual(500);
    })
})