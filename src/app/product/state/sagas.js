import * as ActionTypes from "./action-types";
import * as service from "./service";
import * as actions from "./actions";
import axios from 'axios';
import * as config from "../../core/config";

import { call, put, takeEvery, takeLatest, cancelled, all,
    delay, race
} from 'redux-saga/effects'

function* fetchProducts() {
    console.log("saga fetchProducts ");

    try {
        // addtional params, can be passed call(addFn, 10, 20)
        
        // const products = yield call(service.getProducts);

        const products = yield call(service.getAllProducts)

        yield put(actions.initError(''))
        yield put(actions.loading(true));
        yield put(actions.initProducts(products));
        yield put(actions.loading(false));
    }
    catch(error) {
        console.log('error fetchproducts', error)
        yield put(actions.initError(error.toString()));
        yield put(actions.loading(false));
    }
    finally {
        if (yield cancelled()) {
           console.log('*****cancelled the call');
        }
    }
}





function* requestProductsWithBrands(action) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    
    try {
        const {posts, timeout} = yield race({
            posts: all([
                call(axios.get, config.apiEndPoint + "/api/products", { cancelToken: source.token }),
                call(axios.get, config.apiEndPoint + "/api/brands", { cancelToken: source.token }),
            ]),
            timeout: delay(1000)
        })

    //   yield all([
    //     call(axios.get, config.apiEndPoint + "/api/products", { cancelToken: source.token }),
    //     call(axios.get, config.apiEndPoint + "/api/brands", { cancelToken: source.token }),
    //   ])
} finally {
  if (yield cancelled()) {
      console.log('cancelling pending calls');
      source.cancel('opeartion cancelled by subsequence request')
    //yield call(source, cancelSource.cancel)
   // yield call(source.cancel, 'opeartion cancelled by subsequence request')
  }
}
}


function* requestProductsWithBrands2(action) {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

try {
  yield all([
    call(axios.get, config.apiEndPoint + "/api/products", { cancelToken: source.token }),
    call(axios.get, config.apiEndPoint + "/api/brands", { cancelToken: source.token }),
  ])
} finally {
  if (yield cancelled()) {
      console.log('cancelling pending calls');
      source.cancel('opeartion cancelled by subsequence request')
    //yield call(source, cancelSource.cancel)
   // yield call(source.cancel, 'opeartion cancelled by subsequence request')
  }
}
}

function* productSaga() {
    yield takeLatest(ActionTypes.FETCH_PRODUCTS, fetchProducts);

    yield takeLatest(ActionTypes.REQEUST_PRODUCTS_WITH_BRANDS, requestProductsWithBrands); 
}



export default productSaga;
  