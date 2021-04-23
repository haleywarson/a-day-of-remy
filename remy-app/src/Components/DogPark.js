import React from 'react'

import "../App.css";
import "../index.css";

import RemyCard from './RemyCard'

export default function DogPark(props) {

    const renderRemy = () => {
        let remyInDogPark = props.dogPark.length !== 0;
        if(remyInDogPark) {
            return (
                <>
                    <RemyCard
                        dogPark={props.dogPark}
                        remys={props.remys}
                        napRemy={props.napRemy}
                        parkRemy={props.parkRemy}
                        feedRemy={props.feedRemy}
                        kennelRemy={props.kennelRemy}
                    />
                    <p>
                    Meet my <a href="/friends">dog friends</a>
                    </p>
                </>
            );
        }
    };

    return (
        <div className="dog-park">
            <img
                alt="Dog Park"
                src="https://image.freepik.com/free-vector/boy-playing-fetch-his-dog-while-using-medical-mask_209620-71.jpg"
            />
            {renderRemy()}
        </div>
    );
}