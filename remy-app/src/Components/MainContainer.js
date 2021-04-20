import React, { useState } from 'react'
import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'
import DogPark from './DogPark'

export default function MainContainer(props) {

    return (

    <div className="main-container">
        <header>
            <h1> Remy's House</h1>
        </header>
        <Kitchen
            kitchen={props.kitchen}
            remys={props.remys}
            feedRemy={props.feedRemy}
            napRemy={props.napRemy}
            kennelRemy={props.kennelRemy}
            parkRemy={props.parkRemy}
        />
        <DogBed
            dogBed={props.dogBed}
            remys={props.remys}
            feedRemy={props.feedRemy}
            napRemy={props.napRemy}
            kennelRemy={props.kennelRemy}
            parkRemy={props.parkRemy}
        />
        <Kennel
            kennel={props.kennel}
            remys={props.remys}
            feedRemy={props.feedRemy}
            napRemy={props.napRemy}
            kennelRemy={props.kennelRemy}
            parkRemy={props.parkRemy}
        />
        <DogPark
            dogPark={props.dogPark}
            remys={props.remys}
            parkRemy={props.parkRemy}
            feedRemy={props.feedRemy}
            napRemy={props.napRemy}
            kennelRemy={props.kennelRemy}
            parkRemy={props.parkRemy}
            />
        {/* <footer>
            <p>Created By: Haley and Eric </p>
        </footer> */}

    </div>
    );
}
