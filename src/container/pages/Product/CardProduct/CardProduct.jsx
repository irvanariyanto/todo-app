import React, {Fragment} from 'react'
// import {connect} from 'react-redux'
// import ActionType from "../../../../redux/reducer/globalActionType";
// import {RootContext} from "../../../Home/Home";
import {GlobalConsumer} from "../../../../context/context";

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
        console.log(this)
        return(
            <Fragment>
                <div>
                    <div>
                        <img src="" alt=""/>
                    </div>
                    <p>Daging Ayam</p>
                    <p>Rp. 34000</p>
                    <div>
                        <button onClick={() => this.props.dispatch({type: 'MINUS_ORDER'})}>-</button>
                        <input type="text" value={this.props.state.totalOrder}/>
                        <button onClick={() => this.props.dispatch({type: 'PLUS_ORDER'})}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({type: ActionType.PLUS_ORDER}),
//         handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
export default GlobalConsumer(CardProduct);