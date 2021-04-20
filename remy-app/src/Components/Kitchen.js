import React from 'react'
import RemyCard from './RemyCard'

export default function Kitchen(props) {

    const renderRemy = () => {
        return <RemyCard 
                kitchen={props.kitchen} 
                remys={props.remys} 
                feedRemy={props.feedRemy} />;
    }

    return (
        <div className="kitchen">
            <h2>Kitchen</h2>
            { renderRemy() }
        </div>
    )
}
