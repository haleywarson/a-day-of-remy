import React from 'react'
import RemyCard from './RemyCard'

export default function DogBed(props) {

    const renderRemy = () => {
            return <RemyCard dogBed={props.dogBed} remys={props.remys} napRemy={props.napRemy} />;
        };
    
    return (
        <div className="dog-bed">
            <h2>Dog Bed</h2>
            { renderRemy() }
        </div>
    )
}
