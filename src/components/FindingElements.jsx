import React from 'react';
import PropTypes from 'prop-types';

export const ImportedComponent = () => <div />;

export const DuplicateComponent = ({ label }) => <span>{label}</span>;

const FindingElements = () => (
  <>
    <ImportedComponent />
    <DuplicateComponent label="first" />
    <DuplicateComponent label="second" />
    <div className="Find-by-classname" />
    <span>Find by element</span>
    <div className="Find-children">
      <span>child 1</span>
      <span>child 2</span>
    </div>
  </>
);

DuplicateComponent.defaultProps = {
  label: '',
};

DuplicateComponent.propTypes = {
  label: PropTypes.string,
};

export default FindingElements;
