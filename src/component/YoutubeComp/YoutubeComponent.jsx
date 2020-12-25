import React from 'react'

const YoutubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <p>Image thumb here</p>
            <p>Title here</p>
            <p>{props.time}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    time: '00.00'
}

export default YoutubeComponent;