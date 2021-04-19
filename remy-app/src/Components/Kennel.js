import React from 'react'
import RemyCard from './RemyCard'

export default function Kennel(props) {

    const renderRemy = () => {
        return <RemyCard kennel={props.kennel} />;
    };

    return (
        <div>
            { renderRemy() }
            <h2>Kennel</h2>
        </div>
    )
}
