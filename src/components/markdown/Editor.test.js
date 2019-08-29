import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor';

describe('Editor component', () => {
  it('renders Editor', () => {
    const wrapper = shallow(<Editor markdown={''} handleChange={() => ({})}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
  
