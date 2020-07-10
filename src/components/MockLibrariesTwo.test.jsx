import React from 'react';
import { shallow } from 'enzyme';
import { add } from 'lodash';
import MockLibraries from './MockLibraries';

jest.mock('lodash');

// Useful for having multiple return values from functions in each test
describe('MockLibrariesTwo', () => {
  it('should not call lodash', () => {
    add.mockImplementation(() => 77);

    const wrapper = shallow(<MockLibraries />);

    expect(wrapper.find('span').text()).toEqual('The sum of 1 + 2 = 77');
  });

  it('should not call lodash with a different response', () => {
    add.mockImplementation(() => 88);

    const wrapper = shallow(<MockLibraries />);

    expect(wrapper.find('span').text()).toEqual('The sum of 1 + 2 = 88');
  });
});
