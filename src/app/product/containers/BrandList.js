import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import BrandList from "../components/BrandList";
import * as actions from "../state/actions";
 
const mapStateToProps = (state) => {
    return {
         brands: state.productState.brands
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (BrandList)