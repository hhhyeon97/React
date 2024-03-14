import React from 'react';
import ChildComponent from './ChildComponent'; // ChildComponent를 import

function ParentComponent() {
  return <ChildComponent name="gamza" age={10} />;
}

export default ParentComponent; // ParentComponent를 default로 export
