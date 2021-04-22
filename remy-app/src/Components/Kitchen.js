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
            <h2>Kitchen</h2>
            { renderRemy() }
        </div>
    );
}