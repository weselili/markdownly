import React from 'react';
import PropTypes from 'prop-types';

function Switch({ increment, decrement }) {
  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

Switch.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default Switch;
