import React, {Component, createContext} from 'react'

const RootContext = createContext()

// Untuk Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component{
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                if (action.type === 'PLUS_ORDER') {
                    this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'MINUS_ORDER') {
                    this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }
            render() {
                return (
                    <Provider value={{dispatch: this.dispatch, state: this.state}}>
                        <Children {...this.props}/>
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Untuk Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component{
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value}/>
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}