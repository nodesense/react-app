import React from "react";
import PropTypes from "prop-types";

//reactive extension
import {Subject} from "rxjs";

import {map, filter, debounceTime} from 'rxjs/operators';

import {searchProducts} from "../service";
 

export default class ProductSearch extends React.Component {

    constructor(props) {
        super(props);

        this.searchProduct = this.searchProduct.bind(this);
        this.state = {
            searchResults: []
        }

        //Rxjs is an observable patter
        //implements  publish & subscribe
        this.subject = new Subject();
    }
 

    searchProduct() {
        console.log("test ", this.refs.searchInput.value);
        let text = this.refs.searchInput.value;

         
        //publishing
        this.subject.next(text);
    }
    
    componentDidMount() {
        console.log("loading products");


        this.textChange = this.subject
        //transform
        .pipe( map ( text => text.trim())) //output passed to next function

        //pass to next function if true
        .pipe(filter ( text => !!text)) //if text empty return false
            
        .pipe(filter ( text => text.length >= 2))

        .pipe(debounceTime(400)) //wait/cooling period for 400 ms
        //subscription
        .subscribe ( text => {
          console.log("Searching *"+ text +"*");
          
                  searchProducts(text)
                  .then ( products => {
                      this.setState({
                          searchResults: products
                      })
                  }) 
        })

    }
 

    render() {
        
 
        let productsElements = this.state.searchResults.map ( (product, index) => {
            return <tr key={product.id} > 
                    <td>
                            
                            {product.name}  
                         
                    </td>

                    <td>
                        {product.price}
                    </td>


                    <td>
                        {product.year}
                    </td>
 
                    
                </tr>
        })

        return (
            <div ref="divContainer">
                <h2>Search </h2>

               <input ref="searchInput" 
                      onChange={this.searchProduct} 
                      name="searchInput" />

                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th> 
                        <th>Year</th> 
                    </tr>
                {
                    this.state.searchResults.map ( (product, index) => (
                            <tr key={product.id} > 
                                    <td>
                                            
                                            {product.name}  
                                        
                                    </td>

                                    <td>
                                        {product.price}
                                    </td>


                                    <td>
                                        {product.year}
                                    </td>
                
                                    
                                </tr>
                        ))
                }

                    </tbody>
                </table>
            </div>
        )
    }

}

ProductSearch.propTypes = {
    products: PropTypes.array 
} 

ProductSearch.defaultProps = {
    products: []
}