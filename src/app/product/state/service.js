// import config from "config";
import * as config from "../../core/config";

import axios from 'axios';
import axiosWrapper from "../../core/axios-wrapper";
import * as restful from "../../core/restful";
 

export async function getAllProducts() {
    return restful.fetchAPI(config.apiEndPoint + "/api/products")
            .then (response => response.data);
}



export async function getAllProductsWithWrapper() {
    return axiosWrapper.get("/api/products")
            .then (response => response.data);
}


export async function getProducts() {
    return restful.getJson(config.apiEndPoint + "/api/products")
}

//GET /api/products/12345
export async function  getProduct(id) {
    return restful.getJson(config.apiEndPoint + "/api/products/" + id)
}

// export async function getBrands() {
//         return restful.getJson(config.apiEndPoint + "/api/brands")
// }

export async function  getBrand(id) {
    return restful.getJson(`${config.apiEndPoint}/api/brands/${id}`);
}

export async function searchProducts(q) {
    return restful.getJson(config.apiEndPoint + "/api/products?q=" + q)
}
 

//create new using PUT method
// PUT /api/products/1234
// {{body data in json format}}
export async function updateProduct(product) {
    return restful.putJson(config.apiEndPoint + '/api/products/' 
                         + product.id, product)
}

//create new using POST method
// POST /api/products
// {{body data in json format}}
export async function createProduct(product) {
        return restful.postJson(config.apiEndPoint +'/api/products',
                                product)
}

export async function saveProduct(product) {
        if (product.id)
            return updateProduct(product);
        
        return createProduct(product);
}

export async function  deleteProduct(id) {
    console.log("Deleting ", id);
    return restful.deleteJson(config.apiEndPoint + "/api/products/" + id)
}



export async function getBrands(cancelToken) {
    return axios.get(config.apiEndPoint + "/api/brands", {cancelToken})
    .then(function (response) {
      // handle success
      console.log(response);
      return response.data;
    })
  }