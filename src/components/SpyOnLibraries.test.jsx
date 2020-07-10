import React from 'react';
import { shallow } from 'enzyme';
import _ from 'lodash';
import SpyOnLibraries from './SpyOnLibraries';

const spy = jest.spyOn(_, 'subtract');

describe('SpyOnLibraries', () => {
  it('should spy on lodash subtract', () => {
    const wrapper = shallow(<SpyOnLibraries />);

    expect(spy).toHaveBeenCalledWith(5, 3);
    expect(wrapper.find('span').text()).toEqual('The difference of 5 - 3 = 2');
  });
});
