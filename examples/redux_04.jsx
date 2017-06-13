import React from 'react';
import { connect } from 'react-redux';
import { addAmount } from './actions';

@connect(({ amount }) => ({
  amount
}), {
  addAmount
})
class App extends React.Component {
  render() {
    ...
  }
}

export default CatCounter;

// Alternative, you can also `compose` hocs
export default connect(({ amounts }) => ({
  amounts
}), {
  addAmount
})(App);
