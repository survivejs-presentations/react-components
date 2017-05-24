class CatCounter extends React.Component {
  state = { amount: 0 }
  render() {
    return (
      <div>
        {/* Capture a ref (controlled vs. uncontrolled) */}
        <input type="text" ref={e => this.amountToAdd = e} />
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
    this.setState(prevState => ({
      amount: prevState.amount + parseInt(this.amountToAdd.value, 10)
    }));
  }
}
