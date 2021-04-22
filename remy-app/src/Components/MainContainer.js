import React from 'react'

import "../App.css";
import "../index.css";

import Kennel from './Kennel'
import Kitchen from './Kitchen'
import DogBed from './DogBed'
import DogPark from './DogPark'

export default function MainContainer(props) {

    return (
        <div className="main-content">
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
                        stopClock={props.stopClock}
                        time={props.time}
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
                        kennelRemy={props.kennelRemy} />
                    </div>
            {/* <div id="footer">
                <footer>
                    <p>
                    Created By:{" "}
                    <a
                        href="https://github.com/haleywarson"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Haley
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://github.com/Kwayzaar"
                        target="_blank"
                        rel="noreferrer"
                        >
                        Eric
                    </a>
                    </p>
                </footer>
                
            </div> */}
        </div>
    );
}
