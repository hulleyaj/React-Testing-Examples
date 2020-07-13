import React from 'react';
import { shallow } from 'enzyme';
import Conditional from './Conditional';

describe('Conditional', () => {
  it('should render Ternary-true', () => {
    const wrapper = shallow(<Conditional ternary />);

    expect(wrapper.find('.Ternary-true').exists()).toEqual(true);
  });

  it('should render Ternary-false', () => {
    const wrapper = shallow(<Conditional />);

    expect(wrapper.find('.Ternary-false').exists()).toEqual(true);
  });

  it('should render ShortCircuit', () => {
    const wrapper = shallow(<Conditional shortCircuit />);

    expect(wrapper.find('.ShortCircuit').exists()).toEqual(true);
  });

  it('should not render ShortCircuit', () => {
    const wrapper = shallow(<Conditional />);

    expect(wrapper.find('.ShortCircuit').exists()).toEqual(false);
  });
});
