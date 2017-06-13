// Action types
const amountTypes = {
  'FETCH_AMOUNT_REQUEST': 'FETCH_AMOUNT_REQUEST',
  'FETCH_AMOUNT_SUCCESS': 'FETCH_AMOUNT_SUCCESS',
  'FETCH_AMOUNT_FAILURE': 'FETCH_AMOUNT_FAILURE'
};

// Reducer
function amountReducer(state, action) {
  switch (action.type) {
    case amountTypes.FETCH_AMOUNT_SUCCESS:
      return {
        amount: action.amount
      };

    // Handle request, failure too

    default:
      return state;
  }
}

...

import { createStore, applyMiddleware } from 'redux';

// Attach middleware when initializing
const store = createStore(amountReducer, [], applyMiddleware(thunk));

// Dispatch somewhere
store.dispatch(fetchAmount()).then(() => console.log('done'));
