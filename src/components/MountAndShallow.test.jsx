import React from 'react';
import { mount, shallow } from 'enzyme';
import ParentComponent from './MountAndShallow';

describe('Mount', () => {
  it('should render Parent-div and Child-div', () => {
    const wrapper = mount(<ParentComponent />);

    expect(wrapper.find('.Parent-div').exists()).toEqual(true);
    expect(wrapper.find('.Child-div').exists()).toEqual(true);
  });
});

describe('Shallow', () => {
  it('should render Parent-div but not Child-div', () => {
    const wrapper = shallow(<ParentComponent />);

    expect(wrapper.find('.Parent-div').exists()).toEqual(true);
    expect(wrapper.find('.Child-div').exists()).toEqual(false);
  });
});
