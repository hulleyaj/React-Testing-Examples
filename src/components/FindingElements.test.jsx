import React from 'react';
import { mount, shallow } from 'enzyme';
import FindingElements, { ImportedComponent, DuplicateComponent } from './FindingElements';

describe('FindingElements', () => {
  it('should find imported components', () => {
    const wrapper = shallow(<FindingElements />);

    expect(wrapper.find(ImportedComponent).exists()).toEqual(true);
  });

  it('should find multiple elements', () => {
    const wrapper = mount(<FindingElements />);
    const duplicateComponents = wrapper.find(DuplicateComponent);

    expect(duplicateComponents.length).toEqual(2);
    expect(duplicateComponents.at(0).text()).toEqual('first');
    expect(duplicateComponents.at(1).text()).toEqual('second');
  });

  it('should test props passed into elements', () => {
    const wrapper = shallow(<FindingElements />);
    const duplicateComponents = wrapper.find(DuplicateComponent);

    expect(duplicateComponents.at(0).prop('label')).toEqual('first');
    expect(duplicateComponents.at(1).props().label).toEqual('second');
  });

  it('should find elements by className', () => {
    const wrapper = shallow(<FindingElements />);

    expect(wrapper.find('.Find-by-classname').exists()).toEqual(true);
  });

  it('should find basic elements', () => {
    const wrapper = shallow(<FindingElements />);

    expect(wrapper.find('span').at(0).text()).toEqual('Find by element');
  });

  it('it should find children by stringing together function calls', () => {
    const wrapper = shallow(<FindingElements />);
    const spans = wrapper.find('.Find-children').find('span');

    expect(spans.length).toEqual(2);
    expect(spans.at(0).text()).toEqual('child 1');
    expect(spans.at(1).text()).toEqual('child 2');
  });

  it('should find children by selectors', () => {
    const wrapper = shallow(<FindingElements />);
    const spans = wrapper.find('.Find-children span');

    expect(spans.length).toEqual(2);
    expect(spans.at(0).text()).toEqual('child 1');
    expect(spans.at(1).text()).toEqual('child 2');
  });

  it('should find children programmatically', () => {
    const wrapper = shallow(<FindingElements />);
    const parent = wrapper.find('.Find-children');

    expect(parent.children().length).toEqual(2);
    expect(parent.children().at(0).text()).toEqual('child 1');
    expect(parent.children().at(1).text()).toEqual('child 2');
  });
});
