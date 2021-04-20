import React, { Component } from 'react'
import "./App.css";
import "./index.css"
import MainContainer from './Components/MainContainer';

export default class App extends Component {

  state = {
    remys: [],
    kennel: [], 
    dogBed: [],
    kitchen: [],
    dogPark: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/remys")
      .then((response) => response.json())
      .then((remys) => this.setState({
        remys: remys[0],
        kennel: remys[0]
      })
      ) 
  }

  feedRemy = (remy) => {
    // if this.state.kennel.length <== 1, then const new kennel === empty array, else run filter and take out remy that was clicked
    this.setState({
      kitchen: [...this.state.kitchen, remy],
      dogBed: [],
      kennel: []
    })
  }

  napRemy = (remy) => {
    this.setState({
      dogBed: [...this.state.dogBed, remy],
      kitchen: [],
      kennel: []
    });
  }

  kennelRemy = (remy) => {
    this.setState({
      kennel: [...this.state.kennel, remy],
      kitchen: [],
      dogBed: []
    });
  }

  parkRemy = (remy) => {
    this.setState({
      dogPark: [...this.state.dogPark, remy]
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> Remy's House</h1>
        </header>
        <MainContainer 
          kennel={ this.state.kennel } 
          dogBed={ this.state.dogBed }
          kitchen={ this.state.kitchen }
          dogPark={ this.state.dogPark }
          remys={ this.state.remys }
          feedRemy={ this.feedRemy }
          napRemy={ this.napRemy }
          kennelRemy={ this.kennelRemy }
          parkRemy={ this.parkRemy }
        />
        <footer>
          <p>Created By: Haley and Eric </p>
        </footer>
      </div>
    )
  }
}
