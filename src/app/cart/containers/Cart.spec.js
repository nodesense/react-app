
// reference: http://redux.js.org/docs/recipes/WritingTests.html

// jest.mock("config", () => {
//     return {
//         apiEndPoint: "http://example.com"
//     }
// })


import {mount} from "enzyme";
import React from "react";
import Cart from "./Cart";

import CartComp from "../components/Cart";

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../state/actions'
import {Provider} from 'react-redux';
import cartReducer from "../state/reducers/cartReducer";

import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  
  afterEach(() => {
     fetchMock.restore();
   })

  it('addItem with cart, store container mock', () => {
    fetchMock.get('http://localhost:7070/secured/api/products', [{id: 1},{id: 2}]);
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const state = {
      cart: {
        cartItems: []
      }
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <Cart items={[]} />
                        </Provider>);

    // look for instance of Cart Comp with Provider or Cart container
      // will not work
      
    expect(wrapper.find("tr").length).toBe(1); // header tr present
  })

  it('addItem with cart, store container mock', () => {
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const state = {
      cart: {
        cartItems: [{id: 100, name: 'Product 100', price: 10000, qty: 1}]
      }
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <Cart  />
                        </Provider>);

    // look for instance of Cart Comp with Provider or Cart container
      // will not work
      
      //instance() is for class component, we won't get 
      // as we don't put Cart componet on mount, instead we got Provider
      //  then cart container, then with in cart container, we have insance

    //const instance = wrapper.instance()
    //instance.addItem()
    
    expect(wrapper.find(Cart).length).toBe(1);

    // get component wrapper in deep nested level
    const container = wrapper.find(Cart);
    const comp = wrapper.find(CartComp)
      
    // Cart component instance
    const instance = comp.instance()
    instance.addItem()

    wrapper.update()

    // expect(container.find(Login).length).to.equal(1);
    // expect(container.find(Login).props().auth).to.eql({ sport: 'BASKETBALL' });

    

    expect(wrapper.find("tr").length).toBe(2); // header tr present
  })



  it('addItem with cart, store container mock', () => {
    
    const expectedActions = [
      actions.addItemToCart(false)
    ]
    
    const state = {
      cart: {
        cartItems: [{id: 10, qty: 1, price: 100, name: "Test"}]
      }
    }

    const store = mockStore(state)
 
    let wrapper = mount(<Provider store={store}>
                                <Cart   />
                        </Provider>);

    expect(wrapper.find("tr").length).toBe(2);  // header + 1 item

    expect(wrapper.find("tr").at(1).text()).toContain("Test");
  })
})