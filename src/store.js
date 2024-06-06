import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {takeLatest, put} from 'redux-saga/effects'
import axios from "axios";


// Your saga should listen for the action type of `GET_ZOO_ANIMALS`
function* rootSaga() {
  // Your code here.
  yield takeLatest('GET_ZOO_ANIMALS', getZooAnimals);

}

// This reducer is waiting for you to put an array of
// zoo animal objects in it...
function* getZooAnimals () {
    console.log('In the Zoo')

    try { //(get function)
      let response = yield axios.get ('/api/zoo');
      console.log("data", response.data)
        yield put({
            type: 'SET_ZOO_ANIMALS',
            payload: response.data });
    } catch (error){
        console.log('in get animals error:', error);
    }
    
     //put in saga is the same as dispatch in react
    }
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



// The previous developer got stuck and couldn't figure out:
// 1. How to write a SQL join.
// 2. How to implement the `redux-saga` library.

// Everything else in this app is bug-free and finished, including automated tests! Thanks to this, **you'll only need to write code inside two files**:
// 1. `zoo.router.js`
// 2. `store.js`

// There's also a `database.sql` file that you'll use to construct a database with two tables:
// 1. `species`
// 2. `class`

// All that's left for you to do is:
// 1. Create a `GET` route that responds with all of the zoo animal data from the database.
// 2. Make a Saga function that'll fetch the zoo animal data and put it into the `zooAnimals` reducer.
