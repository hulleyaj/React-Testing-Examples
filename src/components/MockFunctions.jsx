import React from 'react';
import PropTypes from 'prop-types';

export const MockFunctionWithNoParams = ({ action }) => <button onClick={action} type="button">lol</button>;

export const MockFunctionWithParams = ({ action }) => <button onClick={() => action('hello')} type="button">lol</button>;

MockFunctionWithNoParams.defaultProps = {
  action: () => {},
};

MockFunctionWithNoParams.propTypes = {
  action: PropTypes.func,
};

MockFunctionWithParams.defaultProps = {
  action: () => {},
};

MockFunctionWithParams.propTypes = {
  action: PropTypes.func,
};
