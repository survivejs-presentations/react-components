import React from 'react';

class Demo extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true; // Can you see what this does?
  }
  render() {
    return <div>demo</div>;
  }
}
