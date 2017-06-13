import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

// Action creator
function* fetchAmount(action) {
   try {
      const amount = yield call(Api.fetchAmount);

      yield put({ type: amountTypes.FETCH_AMOUNT_SUCCESS, amount });
   } catch (error) {
      yield put({ type: amountTypes.FETCH_AMOUNT_FAILURE, error });
   }
}

// Saga, allows concurrent queries with takeEvery
function* amountSaga() {
  yield* takeEvery(amountTypes.FETCH_AMOUNT_REQUEST, fetchAmount);
}
