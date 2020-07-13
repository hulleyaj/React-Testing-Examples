import React from 'react';
import { mount, shallow } from 'enzyme';
import ParentComponent, { ChildComponent } from './MountAndShallow';

describe('Mount', () => {
  it('should render Parent-div and all of its children, infinitely deep', () => {
    const wrapper = mount(<ParentComponent />);

    expect(wrapper.find('.Parent-div').exists()).toEqual(true);
    expect(wrapper.find('.Child-div').exists()).toEqual(true);
    expect(wrapper.find('.SubChild-div').exists()).toEqual(true);
  });
});

describe('Shallow', () => {
  it('should render Parent-div but not Child-div, SubChild-div', () => {
    const wrapper = shallow(<ParentComponent />);

    expect(wrapper.find('.Parent-div').exists()).toEqual(true);
    expect(wrapper.find('.Child-div').exists()).toEqual(false);
    expect(wrapper.find('.SubChild-div').exists()).toEqual(false);
  });

  it('should render ParentComponent and dive one level deep', () => {
    const wrapper = shallow(<ParentComponent />);

    expect(wrapper.find('.Child-div').exists()).toEqual(false);
    expect(wrapper.find(ChildComponent).dive().find('.Child-div').exists()).toEqual(true);
  });
});
