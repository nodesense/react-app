import * as ActionTypes from "./action-types";
import * as service from "./service";
import * as actions from "./actions";

import { call, put, takeEvery, takeLatest, take } from 'redux-saga/effects'

//takeEvery - runs all requests
//takeLatest - cancel first pending requests


function* requestLogin(action) {
    console.log("saga requestLogin ", action);

    const {history,  payload: {user}} = action;

    console.log("data ", user);

    try {
        // addtional params, can be passed call(addFn, 10, 20)
        const data = yield call(service.login, user);
        window.localStorage.setItem("token",data.token)

        let identity = JSON.stringify(data.identity);
        window.localStorage.setItem("identity", identity)

        let roles = JSON.stringify(data.identity.roles);

        window.localStorage.setItem("roles", roles)
        
        console.log(data);

        yield put(actions.loggedIn())


        if (history) history.push('/');
    }
    catch(error) {
        console.log('login failed');
    }
}


function* requestLogout(action) {
    console.log("saga requestLogout ", action);

    let {history} = action;

    try {
        window.localStorage.removeItem("token" )
        window.localStorage.removeItem("identity" )
        window.localStorage.removeItem("roles")
        yield put(actions.loggedOut())
        if (history) history.push('/');
    }
    catch(error) {
        console.log('logout failed');
    }
}

function* authSaga() {
    yield takeLatest(ActionTypes.REQUEST_LOGIN, requestLogin);
    yield takeLatest(ActionTypes.REQUEST_LOGOUT, requestLogout);
}


export function* loginFlowSaga() {
    while (true) {
      console.log('loginFlowSaga::waiting for login');
      yield take(ActionTypes.REQUEST_LOGIN)
      // ... perform the login logic
      console.log('loginFlowSaga::waiting for logout');
      yield take(ActionTypes.REQUEST_LOGOUT)
      console.log('loginFlowSaga::loggedout ')
      // ... perform the logout logic
    }
  }

export default authSaga;
  