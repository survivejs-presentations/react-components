const CatCounter = ({ amount }) => {
  let ref = null;

  return (
    <div>
      {/* Capture a ref (controlled vs. uncontrolled) */}
      <input type="text" ref={e => ref = e} />
      <h2>I've seen {amount} cats</h2>
      <button
        type="button"
        className="cat-button"
        onClick={() => console.log(ref)}
      >
        Saw a Cat
      </button>
    </div>
  );
};
