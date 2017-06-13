import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import mySaga from './sagas';

// Connect saga middleware with Redux
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// Connect saga with middleware
sagaMiddleware.run(amountSaga);

...

// Dispatch somewhere
store.dispatch(fetchAmount()).then(() => console.log('done'));
