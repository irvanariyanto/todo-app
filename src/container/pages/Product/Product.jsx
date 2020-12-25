import React, {Fragment} from 'react'
import CardProduct from "./CardProduct/CardProduct";
// import {connect} from 'react-redux'
// import {RootContext} from "../../Home/Home";
import {GlobalConsumer} from "../../../context/context";

class Product extends React.Component{
    render() {
        return(
            <Fragment>
                <div>
                    <div>
                        <div>{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct/>
            </Fragment>
        );
    }
}

// const mapStateToProps = (state) =>{
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);