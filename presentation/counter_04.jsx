import React from 'react';

const addAmount = ({ amount }) => ({ amount: amount + 1 });

class CatCounter extends React.Component {
  state = { amount: 0 }
  render() {
    return (
      <div>
        <h2>I've seen {this.state.amount} cats</h2>
        <button
          type="button"
          className="cat-button"
          onClick={this.sawCat}
        >
          Saw a Cat
        </button>
      </div>
    );
  }
  sawCat = () => {
    this.setState(addAmount);
  }
}

export default CatCounter;
