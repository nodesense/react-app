import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from 'axios';

import {Link} from "react-router-dom";
const CancelToken = axios.CancelToken;

export default class BrandList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.source = CancelToken.source();
        this.props.actions.fetchBrands(this.source.token);
    }

    componentWillUnmount() {
        this.source.cancel('Operation canceled by the user.');
    }
 
    render() {
         
        console.log('brands ', this.props.brands);

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                  
                {
                    this.props.brands.map (brand => (
                        <tr key={brand.id}>
                           <td>
                           
                           <Link to={`/brands/edit/${brand.id}`}
                              >
                              {brand.name}
                            </Link>
                           </td>
                            

                            <td>
                               <button onClick={() => this.props.actions.deleteProduct(brand.id)}>
                                X
                               </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            </table>
        )

    }

}


BrandList.defaultProps = {
    brands: [],
    loading: false,
    error: false,
    errorMessage: ''
}
