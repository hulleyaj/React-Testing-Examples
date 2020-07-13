import React from 'react';
import { shallow } from 'enzyme';
import { MockFunctionWithParams, MockFunctionWithNoParams } from './MockFunctions';

describe('MockFunctionWithNoParams', () => {
  it('should call the action function on button click', () => {
    const mockAction = jest.fn();
    const wrapper = shallow(<MockFunctionWithNoParams action={mockAction} />);

    expect(mockAction).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click');
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});

describe('MockFunctionWithParams', () => {
  it('should call the action function on button click with hello passed in', () => {
    const mockAction = jest.fn();
    const wrapper = shallow(<MockFunctionWithParams action={mockAction} />);

    expect(mockAction).toHaveBeenCalledTimes(0);
    wrapper.find('button').simulate('click');
    expect(mockAction).toHaveBeenCalledTimes(1);
    expect(mockAction).toHaveBeenLastCalledWith('hello');
  });
});

const reusableMock = jest.fn();

describe('Bonus: Use file scoped mocks', () => {
  it('should call reusableMock times 1', () => {
    const wrapper = shallow(<MockFunctionWithNoParams action={reusableMock} />);

    wrapper.find('button').simulate('click');

    expect(reusableMock).toHaveBeenCalledTimes(1);
  });

  it('should call reusableMock times 2', () => {
    const wrapper = shallow(<MockFunctionWithNoParams action={reusableMock} />);

    wrapper.find('button').simulate('click');

    expect(reusableMock).toHaveBeenCalledTimes(2);
  });

  it('should call reusableMock times 1 again because of the reset', () => {
    jest.resetAllMocks();

    const wrapper = shallow(<MockFunctionWithNoParams action={reusableMock} />);

    wrapper.find('button').simulate('click');

    expect(reusableMock).toHaveBeenCalledTimes(1);
  });
});
