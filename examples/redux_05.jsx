import React from 'react';
import { connect } from 'react-redux';
import { addAmount } from './actions';

@connect(({ amounts }) => ({
  amounts
}), {
  addAmount
})
export default connect(({ amount }) => ({
  amount
}), {
  addAmount
})(({ amount, addAmount, ...props }) => ...);
