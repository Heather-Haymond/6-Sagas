/**
 * DO NOT TOUCH
 * 
 * For Prime Instructional Staff use only.
 */
import 'jest-expect-message';
import { afterEach, beforeAll, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';


// Stub out console.log
// Some students have very verbose logs, that make it difficult
// to follow relevant test logs
console.log = console.error = console.warn = console.group = () => { };

// Import the mocked server:
import { testServer as server } from './__test_utils__/__mocks__/testServer'

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
  //jest.clearAllMocks()
  cleanup();

})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})

