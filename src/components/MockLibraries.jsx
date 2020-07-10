import React from 'react';
import { add } from 'lodash';

const MockLibraries = () => <span>{`The sum of 1 + 2 = ${add(1, 2)}`}</span>;

export default MockLibraries;
