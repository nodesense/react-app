/*
  Learn about properties, default props
*/

import React from "react";
import PropTypes from "prop-types";
import Theme from "../contexts/ThemeContext";

//import "./footer.css";
 

export default function Footer(props) { 
        return (
            <div className="highlight"> 
            <hr />
             <p>Copyrights@{props.year}, {props.company}</p>

             <Theme.Consumer>
               { value => (
                 <p>My theme is {value}</p>
               )}
             </Theme.Consumer>

            </div>
        )
} 


Footer.defaultProps = {
    
}

Footer.propTypes = {
    
}