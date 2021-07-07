import { getAllProducts, getAllProductsWithWrapper } from "./service";
import * as config from "../../core/config";

jest.unmock('axios');


import axios     from 'axios';
import  MockAdapter from "axios-mock-adapter";
import axiosWrapper from "../../core/axios-wrapper";
 

 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

var mockWrapper = new MockAdapter(axiosWrapper);


describe ("getAllProducts mock test", () => {
    it ("async test ", async () => {

        mock.onGet(config.apiEndPoint + "/api/products").reply(200, 
             [{ id: 1, name: "iphone" }],
        );
         

        const products = await getAllProducts()
        expect(products).toEqual([{ id: 1, name: "iphone" }])

    })
})



describe ("getAllProductsWithWrapper mock test", () => {
    it ("async test ", async () => {

        mockWrapper.onGet(config.apiEndPoint + "/api/products").reply(200, 
             [{ id: 10, name: "iphone10" }],
        );
         

        const products = await getAllProductsWithWrapper()
        expect(products).toEqual([{ id: 10, name: "iphone10" }])

    })
})


