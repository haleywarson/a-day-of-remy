import React from 'react'

import "../App.css";
import "../index.css";

import RemyCard from "./RemyCard";

export default function DogBed(props) {

    const renderRemy = () => {
        let remyInDogBed = props.dogBed.length !== 0;
        if(remyInDogBed) {
            return (
                <>
                    <RemyCard
                    dogBed={props.dogBed}
                    remys={props.remys}
                    napRemy={props.napRemy}
                    parkRemy={props.parkRemy}
                    feedRemy={props.feedRemy}
                    kennelRemy={props.kennelRemy}
                    />
                    <button onClick={() => props.startClock()}>Goodnight!</button>
                    <p>{props.time}</p>
                    <button onClick={() => props.stopClock()}>Wake up!</button>
                </>
                );
                }
        };

    return (
        <div className="dog-bed">
            <h2>Dog Bed</h2>
            { renderRemy() }
        </div>
    )
}