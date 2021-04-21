import React from 'react'

import "../App.css";
import "../index.css";

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
          parkRemy={props.parkRemy}
          giveTreats={props.giveTreats}
          treatCount={props.treatCount}
          imFullAlert={props.imFullAlert}
        />
        <DogBed
          dogBed={props.dogBed}
          remys={props.remys}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
          parkRemy={props.parkRemy}
          startClock={props.startClock}
          time={props.time}
          stopClock={props.stopClock}
        />
        <Kennel
          kennel={props.kennel}
          remys={props.remys}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
          parkRemy={props.parkRemy}
          startClock={props.startClock}
          stopClock={props.stopClock}
        />
        <DogPark
          dogPark={props.dogPark}
          remys={props.remys}
          parkRemy={props.parkRemy}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
        />
      </div>
    );
}
