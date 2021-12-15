
import React, {Component} from "react";
import PropTypes from "prop-types";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Theme from "./contexts/ThemeContext";


//import About from "./components/About";
//import Contact from "./components/Contact";

//import Cart from "./cart/components/Cart"; 

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'red'
        }
    }
    
    componentDidMount() {
        
    }

    //ES.NEXT
    //babel-preset-react in .babelrc for support
    static childContextTypes = {
        color: PropTypes.string,
        name: PropTypes.string
    };


    //context is accessible from all child
    //don't update context
    getChildContext() {
        return {
                color: "purple",
                name: "Product App"
            };
    }
    
    render() {
        return (
            <div> 
            <Theme.Provider value={this.state.theme}>
                <button className="success" onClick={() => this.setState({theme: 'green'})}>Green</button>
                <button className="error" onClick={() => this.setState({theme: 'red'})}>Red</button>
                
                <Header></Header>

                {/* router container.. */}
                {this.props.children}
            
            
                <Footer year={2020} company="React App"> </Footer>
            </Theme.Provider>
            </div>
        )
    }
} 


App.defaultProps = {
    
}

App.propTypes = {
    
}

