import React, { Component } from "react";

import "../App.css";
import "../index.css";

import MainContainer from "./MainContainer";

export default class App extends Component {

  state = {
    remys: [],
    kennel: [],
    dogBed: [],
    kitchen: [],
    dogPark: [],
    treatCount: 0
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
      kennel: [...this.state.kennel, remy],
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
      treatCount: this.state.treatCount + 1
    });
  }

  // imFullAlert = () => {
  //   if ({this.state.treatCount} >== 5) {
  //     alert("I'm full!")
  //   }
  // }

  render() {
        return (
          <div className="App">
            <header></header>
            <main>
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
              />
            </main>
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
          </div>
        );
    }
}

