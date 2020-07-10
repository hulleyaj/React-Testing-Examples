import React from 'react';
import { mount, shallow } from 'enzyme';
import { ClassComponent, PureComponent } from './ClassAndPureComponents';

describe('ClassComponent', () => {
  it('should mount the component', () => {
    const wrapper = shallow(<ClassComponent />);

    expect(wrapper.find('span').text()).toEqual('Is loaded: true');
  });

  it('should unmount the component', () => {
    const mockUnmountCallback = jest.fn();
    const wrapper = shallow(<ClassComponent unmountCallback={mockUnmountCallback} />);

    expect(mockUnmountCallback).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(mockUnmountCallback).toHaveBeenCalledTimes(1);
  });
});

describe('PureComponent', () => {
  it('should mount the component', () => {
    const wrapper = mount(<PureComponent />);

    expect(wrapper.find('span').text()).toEqual('Is loaded: true');
  });

  it('should unmount the component', () => {
    const mockUnmountCallback = jest.fn();
    const wrapper = mount(<PureComponent unmountCallback={mockUnmountCallback} />);

    expect(mockUnmountCallback).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(mockUnmountCallback).toHaveBeenCalledTimes(1);
  });
});
