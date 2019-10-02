import React from 'react'
import { Link } from 'react-router-dom'

const withLink = WarppedComponent => props => {
    const newProps = {
        ...props,
        video: {
            ...props.video,
            title: (
                <Link to={{ pathname: `/${props.video.id}`, autoplay: true }}>
                    {props.video.title}
                </Link>
            )
        }
    }
    return <WarppedComponent {...newProps} />
}

export default withLink