import { getAllProducts } from "./service";
import * as config from "../../core/config";

var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");
 
// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);
 
mock.onGet("/users").reply(200, {
    users: [{ id: 1, name: "John Smith" }],
  });


describe ("getAllProducts mock test", () => {
    it ("async test ", async () => {

        mock.onGet(config.apiEndPoint + "/api/products").reply(200, 
             [{ id: 1, name: "iphone" }],
        );
         

        const products = await getAllProducts()
        expect(products).toEqual([{ id: 1, name: "iphone" }])

    })
})