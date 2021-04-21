import React from 'react'

import "../App.css";
import "../index.css";

import RemyCard from './RemyCard'

export default function DogPark(props) {

    const renderRemy = () => {
        let remyInDogPark = props.dogPark.length !== 0;
        if(remyInDogPark) {
            return <RemyCard
                        dogPark={props.dogPark}
                        remys={props.remys}
                        napRemy={props.napRemy} 
                        parkRemy={props.parkRemy}
                        feedRemy={props.feedRemy}
                        kennelRemy={props.kennelRemy}
                    />;
            }
        };

    return (
        <div className="dog-park">
            <h2>Dog Park</h2>
            { renderRemy() }
        </div>
    )
}