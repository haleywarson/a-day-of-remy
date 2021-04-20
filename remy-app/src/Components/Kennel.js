import React from 'react'
import RemyCard from './RemyCard'

export default function Kennel(props) {

    const renderRemy = () =>  {
        let remyInKennel = props.kennel.length !== 0;
        if(remyInKennel) {
            return (
                <RemyCard
                    kitchen={props.kitchen}
                    remys={props.remys}
                    feedRemy={props.feedRemy}
                    napRemy={props.napRemy}
                    kennelRemy={props.kennelRemy}
                />
            );
        }
    }

    return (
        <div className="kennel">
            <h2>Kennel</h2>
            { renderRemy() }
        </div>
    );
}
