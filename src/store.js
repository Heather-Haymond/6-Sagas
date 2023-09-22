import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// Your saga should listen for the action type of `GET_ZOO_ANIMALS`
function* rootSaga() {
    // YOUR CODE HERE

}



// Used to store class and number of unique animals in that class
const zooAnimals = (state = [], action) => {
    switch (action.type) {
        case 'SET_ZOO_ANIMALS':
            return action.payload;
        default:
            return state;
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
// Need a function for exporting so we can test it
export const createAppStore = () => {
    const store = createStore(
        combineReducers({
            zooAnimals,
        }),
        // Add sagaMiddleware to our store
        applyMiddleware(sagaMiddleware, logger),
    );

    // Pass rootSaga into our sagaMiddleware
    sagaMiddleware.run(rootSaga);
    return store;
}