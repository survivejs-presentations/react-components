import fetch from 'isomorphic-fetch';
import thunk from 'redux-thunk';

const RESOURCE_URL = '...';

// Action creator
function fetchAmount() {
  return (dispatch, getState) => {
    dispatch({ type: amountTypes.FETCH_AMOUNT_REQUEST });

    return fetch(RESOURCE_URL).then(res => {
      if(res.ok) {
        return res.json();
      }

      throw(res.statusText);
    }).then(body => {
      dispatch({ type: amountTypes.FETCH_AMOUNT_SUCCESS, amount: body });
    }).catch(error => {
      dispatch({ type: amountTypes.FETCH_AMOUNT_FAILURE, error });
    });
  };
}
