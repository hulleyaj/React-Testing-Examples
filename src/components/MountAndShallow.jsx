import React from 'react';

const ChildComponent = () => <div className="Child-div" />;

const ParentComponent = () => (
  <>
    <div className="Parent-div" />
    <ChildComponent />
  </>
);

export default ParentComponent;
