import React from 'react'
import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'

export default function MainContainer(props) {

    return (
        <div>        
            <Kennel kennel={ props.kennel }/>
            <DogBed dogBed={ props.dogBed } />
            <Kitchen kitchen={ props.kitchen }/>
        </div>
    )
}
