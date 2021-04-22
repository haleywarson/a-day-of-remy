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
                src="https://lh3.googleusercontent.com/proxy/lQuRhi6I0si3R1pwVqu9k-dc1KTGVnIGOgorYV3XZ4Oq_HOMB_tDursJuaXLn_y1TkTI5kW0dKsX90wFWkFWJf2a"
                />
                {renderRemy()}
        </div>
    );
}