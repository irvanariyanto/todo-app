import React from 'react'

const Post = (props) => {
    return(
        <div>
            <img src="https://placeimg.com/100/100/any" alt=""/>
            <p onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
            <p>{props.data.description}</p>
            <button onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    )
}

export default Post