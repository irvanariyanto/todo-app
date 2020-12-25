import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import ActionType from "../../../../redux/reducer/globalActionType";

class CardProduct extends React.Component{

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.props.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.props.order)
    //     })
    //
    //
    // }
    //
    // handleMinus = () => {
    //     if (this.props.order > 0){
    //         this.setState({
    //             order: this.props.order - 1
    //         },() => {
    //             this.handleCounterChange(this.props.order)
    //         })
    //     }
    // }

    render() {
        console.log(this.props)
        return(
            <Fragment>
                <div>
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <p>Daging Ayam</p>
                    <p>Rp. 34000</p>
                    <div>
                        <button onClick={this.props.handleMinus}>-</button>
                        <input type="text" value={this.props.order}/>
                        <button onClick={this.props.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);