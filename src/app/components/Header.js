import React, {Component} from "react";
import PropTypes from "prop-types";

import Navigation from "../containers/Navigation";

import { GoogleLogin } from 'react-google-login';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    googleSuccessResponse = (response)=> {
        console.log("Successfully logged in", response)
        // response.profileObj which has email, googleid, givenName, ....
        // now inspect response object create user in backend if the user doesn't exist
        // POST /users 

        // Ensure that you use redux to store user information , ensure that user is created in backend
    }

    googleLoginFailResponse = (response) => {
        console.log("User could not sign in ", response)
    }


    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div> 
            <h2>React App</h2>
            <Navigation>
            </Navigation>

            <GoogleLogin
    clientId="509867611336-3r40opdroaoq5vpat1osbo7epj614vri.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={this.googleSuccessResponse}
    onFailure={this.googleLoginFailResponse}
    cookiePolicy={'single_host_origin'}
  />

            <hr />
            </div>
        )
    }
} 


Header.defaultProps = {
    
}

Header.propTypes = {
    
}