import {createStore, 
    combineReducers, 
    applyMiddleware} from "redux";


import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'


import productSaga from './product/state/sagas';

import cartReducers from "./cart/state/reducers";
import productReducer from "./product/state/reducer";
import authReducer from "./auth/state/reducer";

const sagaMiddleware = createSagaMiddleware()

let rootReducer = combineReducers({
    //stateName: reducer fn
    cart: cartReducers,
    productState: productReducer,
    authState: authReducer
//
})

 
function getInitialAuthState() {
    return {
        authenticated: window.localStorage.token ? true : false
    }
}
 
 
function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log('logger dispatching', action)

            let result = next(action)
            
            console.log('logger next state', store.getState())
            return result
        }
    }
}


let store = createStore(rootReducer, 
                    {
                        authState: getInitialAuthState()
                    },
                    applyMiddleware(loggerMiddleware, thunk, sagaMiddleware));



sagaMiddleware.run(productSaga)

export default store;