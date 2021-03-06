import * as authApi from './service';
import * as ActionTypes from "./action-types";

const storage = window.localStorage;

export const loggedIn = () => ({type: ActionTypes.LOGGED_IN});
export const loggedOut = () => ({type: ActionTypes.LOGGED_OUT});

export const requestLogin = (username, password, history) => ({
  type: ActionTypes.REQUEST_LOGIN,
  payload: {user: {username, password} },
  history
})

export const requestLogout = (history) => ({
  type: ActionTypes.REQUEST_LOGOUT,
  history
});

//thunk in es6
export const login = (username, password, history) => {
  return function(dispatch) {
      console.log("user ", username);
      
      let user = {username, password};

      authApi.login(user)
      .then((data) => {
            storage.setItem("token",data.token)

            let identity = JSON.stringify(data.identity);
            storage.setItem("identity", identity)

            let roles = JSON.stringify(data.identity.roles);

            storage.setItem("roles", roles)
            
           console.log(data);
           alert(data.token);

           //read from local storage
           //redirect

           dispatch({type: ActionTypes.LOGGED_IN})

           history.push("/");
    });
  };
};

//thunk in es6
export const logout = (history) => {
  return (dispatch) => {
     storage.removeItem("token");
     storage.removeItem("identity");
     storage.removeItem("roles");


     dispatch({type: ActionTypes.LOGGED_OUT});

     history.push("/");
  };
};
