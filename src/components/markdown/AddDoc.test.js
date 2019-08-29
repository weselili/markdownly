import React from 'react';
import { shallow } from 'enzyme';
import AddDoc from './AddDoc';

describe('AddDoc component', () => {
  it('renders AddDoc', () => {
    const wrapper = shallow(<AddDoc title={''} handleSubmit={() => ({})} />);
    expect(wrapper).toMatchSnapshot();
  });
});
  
