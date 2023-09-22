/**
 * DO NOT TOUCH
 * 
 * For Prime Instructional Staff use only.
 */
import 'jest-expect-message';
import '@testing-library/jest-dom'
import { default as waitFor } from 'wait-for-expect';

// Configure test timeouts
waitFor.defaults.timeout = 1000
jest.setTimeout(1500);

// Stub out console.log
// Some students have very verbose logs, that make it difficult
// to follow relevant test logs
console.log = console.warn = console.error = console.group = () => { };

import { server } from './mocks/server'

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
  jest.clearAllMocks()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})