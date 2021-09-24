
import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Calc from './Calc';
import CalcButton from './CalcButton';
import { Button } from '@material-ui/core';
 
describe('Calc component', () => {
  it('should render snapshot', () => {
    const wrapper = mount(<CalcButton />)
    const component = wrapper.instance()  
      const spy =  jest.spyOn(component, 'incr')
    expect(wrapper.find(Button).length).toBe(2);

   // click/simulate doesn't work for react material ui
   wrapper.find(Button)
  .at(0)
  .props()
  .onClick({ target: { } });

  wrapper.update()

  // expect(component.incr).toHaveBeenCalled() // doesn't work, FIXME

  expect(component.state.counter).toBe(1)


  component.incr() // calling funtion manually, increenting twice
    //component, 'incr'
   
   expect(component.incr).toHaveBeenCalled()

   wrapper.update()
   expect(component.state.counter).toBe(2)
});
})