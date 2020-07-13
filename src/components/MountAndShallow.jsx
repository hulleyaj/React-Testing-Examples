import React from 'react';

const SubChildComponent = () => <div className="SubChild-div" />;

export const ChildComponent = () => (
  <div className="Child-div">
    <SubChildComponent />
  </div>
);

const ParentComponent = () => (
  <>
    <div className="Parent-div" />
    <ChildComponent />
  </>
);

export default ParentComponent;
