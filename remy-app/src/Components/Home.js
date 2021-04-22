import React, { Component } from "react";

import "../App.css";
import "../index.css";

import MainContainer from "./MainContainer";
import CloudContainer from './Clouds'
import Footer from './Footer'

export default class Home extends Component {
  state = {
    remys: [],
    kennel: [],
    dogBed: [],
    kitchen: [],
    dogPark: [],
    treatCount: 0,
    time: 0,
    clockId: null,
  };

  componentDidMount() {
    fetch("http://localhost:3000/remys")
      .then((response) => response.json())
      .then((remys) =>
        this.setState({
          remys: remys[0],
          kennel: remys[0],
        })
      );
  }

  componentWillUnmount() {
    this.stopClock();
  }

  feedRemy = (remy) => {
    // if this.state.kennel.length <== 1, then const new kennel === empty array, else run filter and take out remy that was clicked
    this.setState({
      kitchen: [...this.state.kitchen, remy],
      dogBed: [],
      kennel: [],
      dogPark: [],
    });
  };

  napRemy = (remy) => {
    this.setState({
      dogBed: [...this.state.dogBed, remy],
      kitchen: [],
      kennel: [],
      dogPark: [],
    });
  };

  kennelRemy = (remy) => {
    this.setState({
      kennel: [remy],
      kitchen: [],
      dogBed: [],
      dogPark: [],
    });
  };

  parkRemy = (remy) => {
    this.setState({
      dogPark: [...this.state.dogPark, remy],
      kitchen: [],
      dogBed: [],
      kennel: [],
    });
  };

  giveTreats = () => {
    this.setState({
      treatCount: this.state.treatCount + 1,
    });
  };

  imFullAlert = () => {
    if (this.state.treatCount === 5) {
      alert("I'm full!");
    }
  };

  startClock = () => {
    const clockId = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    this.setState({
      clockId,
    });
  };

  resetTime = () => {
    this.setState({
      time: 0,
    });
  };
  
  stopClock = () => {
    if (this.state.clockId) {
      clearInterval(this.state.clockId);
      this.resetTime();
    }
  };

  render() {

    return (
      <div className="Home">
        <header>
        </header>
        <main>
          <CloudContainer />
          <MainContainer
            kennel={this.state.kennel}
            dogBed={this.state.dogBed}
            kitchen={this.state.kitchen}
            dogPark={this.state.dogPark}
            remys={this.state.remys}
            feedRemy={this.feedRemy}
            napRemy={this.napRemy}
            kennelRemy={this.kennelRemy}
            parkRemy={this.parkRemy}
            giveTreats={this.giveTreats}
            treatCount={this.state.treatCount}
            imFullAlert={this.imFullAlert}
            startClock={this.startClock}
            stopClock={this.stopClock}
            time={this.state.time}
          />
        </main>
        <Footer />
      </div>
    );
  }
}  