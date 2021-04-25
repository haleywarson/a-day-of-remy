import React, { useState, useEffect } from "react";

import "../App.css";
import "../index.css";

import MainContainer from "./MainContainer";
import CloudContainer from './Clouds'
import Footer from './Footer'

const remyUrl = "http://localhost:3000/remys"

export default function Home() {

  const [remys, setRemys] = useState([]);
  const [kennel, setKennel] = useState([]);
  const [dogBed, setDogBed] = useState([]);
  const [kitchen, setKitchen] = useState([]);
  const [dogPark, setDogPark] = useState([]);
  const [treatCount, setTreatCount] = useState(0);
  const [time, setTime] = useState(0);
  const [clockId, setClockId] = useState(null);

  useEffect(() => {
    fetch(remyUrl)
      .then((response) => response.json())
      .then((remys) => {
        setRemys(remys[0])
        setKennel(remys[0])
        }
      );
    return () => {stopClock()};
  }, [])

  // Functions to move Remy to locations
  const feedRemy = (remy) => {
    setKitchen([remy])
    setDogBed([])
    setKennel([])
    setDogPark([])
  };

  const napRemy = (remy) => {
    setDogBed([remy])
    setKennel([])
    setDogPark([])
    setKitchen([])
  };

  const kennelRemy = (remy) => {
    setKennel([remy])
    setDogPark([])
    setKitchen([])
    setDogBed([])
  };

  const parkRemy = (remy) => {
    setKennel([])
    setDogPark([remy])
    setKitchen([])
    setDogBed([])
  };

  // Functions within locations to add treats, alert, manage clock
  const giveTreats = () => {
    const newTreatCount = treatCount + 1;
    setTreatCount(newTreatCount)
    imFullAlert(newTreatCount)
  }

  const imFullAlert = () => {
    if(treatCount === 5) {
      alert("I'm full!");
    }
  };

  const startClock = () => {
    const clockId = setInterval(() => {
      setTime(time + 1)}, 1000);
      setClockId(clockId)
  }

  const resetTime = () => {
    setTime(0)
  };
  
  const stopClock = () => {
    if(clockId) {
      clearInterval(clockId);
      resetTime();
    };
  }

  return (
    <div className="Home">
      <header>
      </header>
      <main>
        <CloudContainer />
        <MainContainer
          kennel={kennel}
          dogBed={dogBed}
          kitchen={kitchen}
          dogPark={dogPark}
          remys={remys}
          feedRemy={feedRemy}
          napRemy={napRemy}
          kennelRemy={kennelRemy}
          parkRemy={parkRemy}
          giveTreats={giveTreats}
          treatCount={treatCount}
          imFullAlert={imFullAlert}
          startClock={startClock}
          stopClock={stopClock}
          time={time}
        />
      </main>
      <Footer />
    </div>
  );

}  

