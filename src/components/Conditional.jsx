import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({ ternary, shortCircuit }) => (
  <>
    {
      ternary
        ? <div className="Ternary-true" />
        : <div className="Ternary-false" />
    }
    {
      shortCircuit && <div className="ShortCircuit" />
    }
  </>
);

Conditional.defaultProps = {
  ternary: false,
  shortCircuit: false,
};

Conditional.propTypes = {
  ternary: PropTypes.bool,
  shortCircuit: PropTypes.bool,
};

export default Conditional;
