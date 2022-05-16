import Routes from './Routes';


import configureMockStore from 'redux-mock-store'
import {Provider} from 'react-redux';

import {MemoryRouter, Switch} from 'react-router-dom';
import {shallow, mount} from "enzyme";
import React from "react";

const middlewares = []
const mockStore = configureMockStore(middlewares)
const state = {
    productState: {products: []}
}
const store = mockStore(state)


// Routes specic, initialEntries , 
describe("Route test", () => {
    it("Default route ", () => {
        const wrapper = mount(<Provider store={store}>
            <MemoryRouter initialEntries={ ['/products']} >
                <Routes />
            </MemoryRouter>
        </Provider>)

        //expect(wrapper.find(ProductHome).length).toBe(1);  

    })


})