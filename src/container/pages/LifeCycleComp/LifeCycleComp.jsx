import React from 'react'

class LifeCycleComp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
    }

    static getDeriveStateFromProps(props, state){

    }
    render() {
        return(
            <button>Component Button</button>
        )
    }
}

export default LifeCycleComp;