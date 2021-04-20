import React, { useState } from 'react'
import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'
import DogPark from './DogPark'

export default function MainContainer(props) {

    return (
    <div className="main-container">
        <Kitchen
        kitchen={props.kitchen}
        remys={props.remys}
        feedRemy={props.feedRemy}
        napRemy={props.napRemy}
        kennelRemy={props.kennelRemy}
        dogPark={props.dogPark}
        />
        <DogBed
        dogBed={props.dogBed}
        remys={props.remys}
        feedRemy={props.feedRemy}
        napRemy={props.napRemy}
        kennelRemy={props.kennelRemy}
        dogPark={props.dogPark}

        />
        <Kennel
        kennel={props.kennel}
        remys={props.remys}
        feedRemy={props.feedRemy}
        napRemy={props.napRemy}
        kennelRemy={props.kennelRemy}
        dogPark={props.dogPark}
        />
    </div>
    );
}
