import React from 'react';
import { shallow } from 'enzyme';
import MockLibraries from './MockLibraries';

jest.mock('lodash', () => ({
  ...jest.requireActual('lodash'),
  add: () => 99,
}));

// Useful for mocking things other than functions, such as components,
// constants (even though I did mock a function here)
describe('MockLibrariesOne', () => {
  it('should not call lodash', () => {
    const wrapper = shallow(<MockLibraries />);

    expect(wrapper.find('span').text()).toEqual('The sum of 1 + 2 = 99');
  });
});
