import React, {Fragment} from 'react'
import CardProduct from "./CardProduct/CardProduct";
import {connect} from 'react-redux'

class Product extends React.Component{
    render() {
        return(
            <Fragment>
                <div>
                    <div>
                        <div>{this.props.order}</div>
                    </div>
                </div>
              <CardProduct/>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);