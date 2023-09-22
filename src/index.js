import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

// Import store
import {createAppStore} from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={createAppStore()}>
            <App />
        </Provider>
    </React.StrictMode>
);
