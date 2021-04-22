import React from 'react'

import "../App.css";
import "../index.css";

import RemyCard from './RemyCard'

export default function Kitchen(props) {

    const renderRemy = () => {
        let remyInKitchen = props.kitchen.length !== 0;
        if(remyInKitchen) {
                return (
                    <>
                        <RemyCard
                            kitchen={props.kitchen}
                            remys={props.remys}
                            feedRemy={props.feedRemy}
                            napRemy={props.napRemy}
                            parkRemy={props.parkRemy}
                            kennelRemy={props.kennelRemy}
                        />
                        <button onClick={props.giveTreats}>Good boy!</button>
                        <p>{props.treatCount} treats</p>
                        {props.imFullAlert()}
                    </>
                    );
        }
    }

    return (
        <div className="kitchen">
            <img
            alt="Kitchen"
            src="https://png.pngtree.com/png-vector/20191030/ourmid/pngtree-pet-dog-bowl-icon-cartoon-style-png-image_1910232.jpg"
            />
            {renderRemy()}
        </div>
    );
}