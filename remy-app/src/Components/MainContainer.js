import React from 'react'

import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'

export default function MainContainer(props) {

    return (
        <div className="main-container">
            {/* if (props.kennel !== []) {
                    return <Kennel kennel={props.kennel} remys={props.remys} kennelRemy={props.kennelRemy} />;
                } else if (props.dogBed !== []) {
                    return <DogBed dogBed={props.dogBed} remys={props.remys} napRemy={props.napRemy} />;
                } else {
                    return <Kitchen kitchen={props.kitchen} remys={props.remys} feedRemy={props.feedRemy} />;
                } */}
            <Kennel
            kennel={props.kennel}
            remys={props.remys}
            kennelRemy={props.kennelRemy}
            />
            <DogBed
            dogBed={props.dogBed}
            remys={props.remys}
            napRemy={props.napRemy}
            />
            <Kitchen
            kitchen={props.kitchen}
            remys={props.remys}
            feedRemy={props.feedRemy}
            />
        </div>
    );
}
