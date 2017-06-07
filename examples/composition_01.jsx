import React from 'react';

const addAmount = (amountToAdd) => (
  ({ amount }) => ({ amount: amount + amountToAdd })
);
const reset = () => ({ amount: 0 });

class CatCounter extends React.Component {
  state = { amount: 0 }
  render() {
    return (
      <div>
        <h2>I've seen {this.state.amount} cats</h2>
        {[1, 2, 4].map((amountToAdd) => (
          <button
            type="button"
            className="cat-button"
            onClick={() => this.sawCat(amountToAdd)}
          >
            Saw {amountToAdd} Cat{amountToAdd > 1 && 's'}
          </button>
        ))}
        <button
          type="button"
          className="reset-button"
          onClick={this.reset}
        >
          Reset
        </button>
      </div>
    );
  }
  sawCat = (amountToAdd) => {
    this.setState(
      addAmount(amountToAdd),
      () => console.log(`added ${amountToAdd}`)
    );
  }
  reset = () => {
    this.setState(reset);
  }
}

export default CatCounter;