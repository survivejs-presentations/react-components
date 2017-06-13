// Action types
const amountTypes = { 'ADD_AMOUNT': 'ADD_AMOUNT' };

// Reducer
function amountReducer(state, action) {
  switch (action.type) {
    case amountTypes.ADD_AMOUNT:
      return {
        amount: state.amount + action.amount
      };

    default:
      return state;
  }
}

// Action creator
function addAmount(amount) {
  return {
    type: amountTypes.ADD_AMOUNT,
    amount
  };
}

const state = { amount: 0 };
const store = amountReducer(state, {});
console.log(store); // { amount: 0 }
console.log(amountReducer(store, addAmount(1))); // { amount: 1 }
