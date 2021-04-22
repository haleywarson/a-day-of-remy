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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv0WNjvSV7VZjZXDeTB08Wvc_oI79idP_3nw&usqp=CAU"
            />
            {renderRemy()}
        </div>
    );
}