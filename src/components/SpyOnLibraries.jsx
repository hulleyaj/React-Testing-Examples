import React from 'react';
import { subtract } from 'lodash';

const SpyOnLibraries = () => <span>{`The difference of 5 - 3 = ${subtract(5, 3)}`}</span>;

export default SpyOnLibraries;
