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
            />
            <DogBed
                dogBed={props.dogBed}
                remys={props.remys}
                napRemy={props.napRemy}
            />
            <Kennel
                kennel={props.kennel}
                remys={props.remys}
                kennelRemy={props.kennelRemy}
            />
            <DogPark
                dogPark={props.dogPark}
                remys={props.remys}
                parkRemy={props.parkRemy}
            />
        </div>
    );
}
