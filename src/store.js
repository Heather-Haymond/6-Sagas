import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import axios from "axios";


// Your saga should listen for the action type of `GET_ZOO_ANIMALS`
function* rootSaga() {
  // Your code here.
}


// This reducer is waiting for you to put an array of
// zoo animal objects in it...
const zooAnimals = (state = [], action) => {
    switch (action.type) {
        case 'SET_ZOO_ANIMALS':
            return action.payload;
        default:
            return state;
    }
}

// Create the sagaMiddleware:
const sagaMiddleware = createSagaMiddleware();

// This is a function that will create the redux store.
// Kind of odd, but we need to do it so that we have a
// way of creating the redux store for our tests.
export const store = () => {
    const store = createStore(
        combineReducers({
            zooAnimals,
        }),
        // Add sagaMiddleware and redux logger to our store:
        applyMiddleware(sagaMiddleware, logger),
    );

    // Pass the rootSaga into our sagaMiddleware:
    sagaMiddleware.run(rootSaga);

    // Return the redux store:
    return store;
}
