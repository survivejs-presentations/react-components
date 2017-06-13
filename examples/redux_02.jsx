import { createStore } from 'redux';

// Action types
const amountTypes = { 'ADD_AMOUNT': 'ADD_AMOUNT' };

// Reducer
function amountReducer(state, action) {
  ...
}

// Action creator
function addAmount(amount) {
  ...
}

// Set up a store and listen to it
const store = createStore(amountReducer);

store.subscribe(state => console.log(store.getState()));

store.dispatch(addAmount(1));
