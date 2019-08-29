import React from 'react';
import { shallow } from 'enzyme';
import Document from './Document';

describe('Document component', () => {
  it('renders Document', () => {
    const wrapper = shallow(<Document markdown={''} handleChange={() => ({})}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
