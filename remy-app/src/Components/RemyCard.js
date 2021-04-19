import React from 'react'

import RemyPic from '../Assets/Remy.jpg'

export default function RemyCard(props) {

    return (
        <div className="remy-card">
            <img alt={ props.name } src={ RemyPic } />
        </div>
    )
}
