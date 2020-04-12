import * as ActionTypes from "./action-types";
import * as service from "./service";
import * as actions from "./actions";

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'


function* fetchProducts() {
    console.log("saga fetchProducts ");

    try {
        // addtional params, can be passed call(addFn, 10, 20)
        const products = yield call(service.getProducts);
        yield put(actions.initError(''))
        yield put(actions.loading(true));
        yield put(actions.initProducts(products));
        yield put(actions.loading(false));
    }
    catch(error) {
        yield put(actions.initError(error.toString()));
        yield put(actions.loading(false));
    }
}

function* productSaga() {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts);
}

export default productSaga;
  