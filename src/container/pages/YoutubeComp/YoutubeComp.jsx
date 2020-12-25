import React, {Component, Fragment} from 'react'
import YoutubeComponent from "../../../component/YoutubeComp/YoutubeComponent";

class YoutubeComp extends Component{
    render() {
        return(
            <Fragment>
                <YoutubeComponent title="asd" />
                <YoutubeComponent title="asd" />
                <YoutubeComponent title="asd" />
                <YoutubeComponent title="asd" />
            </Fragment>
        )
    }
}

export default YoutubeComp;