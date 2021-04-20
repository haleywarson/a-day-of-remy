import React from 'react'
import RemyCard from './RemyCard'

export default function Kennel(props) {

    const renderRemy = () =>  {
        let remyInKennel = props.kennel.length !== 0;
        if(remyInKennel) {
            return <RemyCard
                    kennel={props.kennel}
                    remys={props.remys}
                    kennelRemy={props.kennelRemy} 
                    napRemy={props.napRemy} 
                    parkRemy={props.parkRemy}
                    feedRemy={props.feedRemy}
                />;
        }
    }
    return (
        <div className="kennel">
            <h2>Kennel</h2>
            { renderRemy() }
        </div>
    );
}
