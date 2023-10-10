import { screen } from '@testing-library/react';
import { renderWithRedux } from '../../__test_utils__/renderWithRedux';
import App from './App'


describe('The React/Redux/Sagas app', () => {
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
