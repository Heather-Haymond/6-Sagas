/**
 * DO NOT TOUCH
 * 
 * For Prime Instructional Staff use only.
 */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store as getStore } from '../store';


const reduxProvider = ({ children }) => (
  <Provider store={getStore()}>
    {children}
  </Provider>
)

const renderWithRedux = (ui) => (
  render(ui, { wrapper: reduxProvider })
)


export { renderWithRedux }
