import React, { useState } from 'react'
import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'

export default function MainContainer(props) {

    const [location, setLocation] = useState("kennel")
    

    return (
        <div className="main-container">        
            <Kennel kennel={ props.kennel } onClick={() => setLocation("kennel")} />
            <DogBed dogBed={ props.dogBed } onClick={() => setLocation("dogBed")} />
            <Kitchen kitchen={ props.kitchen } onClick={() => setLocation("kitchen")} />
        </div>
    )
}
