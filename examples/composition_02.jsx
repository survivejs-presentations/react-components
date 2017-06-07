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
          <CatAdder
            amountToAdd={amountToAdd}
            onAdd={() => this.sawCat(amountToAdd)}
          />
        ))}
        <Reset onReset={this.reset} />
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

const CatAdder = ({ amountToAdd, onAdd }) => (
  <button
    type="button"
    className="cat-button"
    onClick={onAdd}
  >
    Saw {amountToAdd} Cat{amountToAdd > 1 && 's'}
  </button>
);

const Reset = ({ onReset }) => (
  <button
    type="button"
    className="reset-button"
    onClick={onReset}
  >
    Reset
  </button>
);

export default CatCounter;