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
            <img
                alt="Dog Bed"
                src="data:image/jpeg;base64,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"
            />
            {renderRemy()}
        </div>
    );
}