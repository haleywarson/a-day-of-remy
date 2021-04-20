import React from 'react'

import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'

export default function MainContainer(props) {

    const renderRemyLocation = () => {
        let remyInKitchen = props.kitchen.length !== 0;
        let remyInDogBed = props.dogBed.length !== 0;
        let remyInKennel = props.kennel.length !== 0;

        if (remyInKennel) {
                return <Kennel 
                            kennel={props.kennel} 
                            remys={props.remys} 
                            kennelRemy={props.kennelRemy} />;
                } else if (remyInDogBed) {
                    return <DogBed 
                            dogBed={props.dogBed} 
                            remys={props.remys} 
                            napRemy={props.napRemy} />;
                } else {
                    return <Kitchen 
                            kitchen={props.kitchen} 
                            remys={props.remys} 
                            feedRemy={props.feedRemy} />;
                } 
    }

    return (
        <div className="main-container">
            {renderRemyLocation()}
        </div>
    );
}
