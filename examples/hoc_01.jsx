import React from 'react';

const withExtra = ({ target, onExtra }) => Component => (
  <div>
    {Component}
    <span onClick={() => onExtra({ target })}>Extra</span>
  </div>
);
