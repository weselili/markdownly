import React from 'react';
import { shallow } from 'enzyme';
import Documents from './Documents';

describe('Documents component', () => {
  it('renders Documents', () => {
    const wrapper = shallow(<Documents />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
