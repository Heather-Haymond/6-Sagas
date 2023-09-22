import { queryByText } from '@testing-library/react';
import { render, screen } from '../../test/testUtil'
import App from './App'

const headerHint = `We're looking for the header to render. Make sure that you didn't accidentally change it. It should say 'Zoo Animals'`;

describe('App', () => {
    it('renders without crashing', () => {
        render(<App />)
    });

    it('displays zoo animal correctly', async () => {
        render(<App />)

        expect(await queryByText(/Aardvark/i)).toBeInTheDocument()
        expect(await getByText(/Zebra/i)).toBeInTheDocument()
    });

    it('displays zoo animals class correctly', async () => {
        render(<App />)

        expect(await queryByText(/Mammal/i)).toBeInTheDocument()
        expect(await getByText(/Bird/i)).toBeInTheDocument()
    });



});