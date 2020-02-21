/**
 * @fileOverview: Test suite for the Calculator component.
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';

import Calc from './Calc';

describe('Calc component', () => {
  it('should render snapshot', () => {
    const component = renderer.create(
      <Calc />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return the correct sum', () => {
    const calculator = new Calc();

    const sum = calculator._getSum(3, 5);
    expect(sum).toEqual(8);
  });

  it('should render required form elements', () => {
    const calculator = shallow(
      <Calc />
    );

    const form = calculator.find('form');
    expect(form.length).toBe(1);
    expect(form.find('input').length).toBe(2);
    expect(form.find('button').length).toBe(1);
    expect(form.find('p.result').length).toBe(1);
  });

  it('should display the result on add', () => {
    const calculator = mount(
      <Calc />
    );

    const form = calculator.find('form');

    form.childAt(0).instance().value = 3;
    form.childAt(1).instance().value = 5;
    form.find('button').simulate('click');

    const result = calculator.find('.result');
    expect(result.text()).toEqual('8');
  });
});