import React from 'react'

import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'

export default function MainContainer(props) {

    return (
      <div className="main-container">
        <Kitchen
          kitchen={props.kitchen}
          remys={props.remys}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
        />
        <DogBed
          dogBed={props.dogBed}
          remys={props.remys}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
        />
        <Kennel
          kennel={props.kennel}
          remys={props.remys}
          feedRemy={props.feedRemy}
          napRemy={props.napRemy}
          kennelRemy={props.kennelRemy}
        />
      </div>
    );
}
