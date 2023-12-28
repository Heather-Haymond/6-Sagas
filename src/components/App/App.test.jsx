import { screen, configure } from '@testing-library/react';
import { renderWithRedux } from '../../__test_utils__/renderWithRedux.jsx';
import App from './App.jsx'


describe('The React/Redux/Sagas app', () => {

  configure({
    getElementError: (message, container) => {
      const error = new Error(message);
      error.name = 'TestingLibraryElementError';
      error.stack = error.stack.substring(0,150);
      return error;
    },
  });
  it('Renders without crashing', () => {
      renderWithRedux(<App />)
    });

    it(`Displays zoo animals' species names`, async () => {
      renderWithRedux(<App />)

      expect(await screen.findByText(/Aardvark/i)).toBeInTheDocument()
      expect(await screen.findByText(/Zebra/i)).toBeInTheDocument()
    });

    it(`Displays zoo animals' class names`, async () => {
      renderWithRedux(<App />)

      expect(await screen.findByText(/Mammal/i)).toBeInTheDocument()
      expect(await screen.findByText(/Bird/i)).toBeInTheDocument()
    });
});
