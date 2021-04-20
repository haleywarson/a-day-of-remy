import React from 'react'
import RemyCard from './RemyCard'

export default function Kennel(props) {

    const renderRemy = () =>  {
        return <RemyCard kennel={props.kennel} remys={props.remys} kennelRemy={props.kennelRemy} />;
    }

    return (
        <div className="kennel">
            <h2>Kennel</h2>
            { renderRemy() }
        </div>
    );
}
