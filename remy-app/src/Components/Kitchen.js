import React from 'react'
import RemyCard from './RemyCard'

export default function Kitchen(props) {

    const renderRemy = () => {
        let remyInKitchen = props.kitchen.length !== 0;
        if(remyInKitchen) {
            return <RemyCard 
                        kitchen={props.kitchen} 
                        remys={props.remys} 
                        feedRemy={props.feedRemy} 
                        napRemy={props.napRemy}
                        kennelRemy={props.kennelRemy}
                        />;
            }
    }

    return (
        <div className="kitchen">
            <h2>Kitchen</h2>
            { renderRemy() }
        </div>
    )
}
