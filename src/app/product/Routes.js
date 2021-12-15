
import React from "react";

import {Route, 
        Switch,
        } from "react-router-dom";

import ProductHome 
        from "./components/ProductHome";

import ProductList 
        from "./containers/ProductList";

import ProductEdit 
        from "./containers/ProductEdit";

import ProductSearch 
        from "./components/ProductSearch";

import BrandList from "./containers/BrandList";
import AuthRoute from "../auth/components/AuthRoute";

 

export default function Routes(props) {
    return (
        <ProductHome>
             <Switch>
                
                <Route path="/products" 
                       exact
                       component={ProductList}>
                        
                </Route>

                <Route path="/products/brands" 
                       exact
                       component={BrandList}>
                        
                </Route>
                
                <AuthRoute path="/products/edit/:id" 
                       component={ProductEdit}>
                
                </AuthRoute>

                <AuthRoute path="/products/create" 
                       component={ProductEdit}>
                
                </AuthRoute>
                
                <Route path="/products/search" 
                       component={ProductSearch}>
                
                </Route>

             </Switch>
        </ProductHome>
    )
}
