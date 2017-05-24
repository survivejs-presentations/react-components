import React from 'react';

class SawCat extends React.Component {
  static propTypes = {
    children: any,
    onClick?: Function
  };
  static defaultProps = {
    onClick: () => {}
  };
  render() {
    ...
  }
}

export default SawCat;
