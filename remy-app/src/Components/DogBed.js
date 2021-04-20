import React from 'react'
import RemyCard from './RemyCard'

export default function DogBed(props) {

    const renderRemy = () => {
        let remyInDogBed = props.dogBed.length !== 0;
        if(remyInDogBed) {
            return (
              <RemyCard
                kitchen={props.kitchen}
                remys={props.remys}
                feedRemy={props.feedRemy}
                napRemy={props.napRemy}
                kennelRemy={props.kennelRemy}
              />
            );
            }
        };
    
    return (
        <div className="dog-bed">
            <h2>Dog Bed</h2>
            { renderRemy() }
        </div>
    )
}
