import React, { Component } from 'react'
import "./App.css";
import MainContainer from './Components/MainContainer';

export default class App extends Component {

  state = {
    remys: [],
    kennel: [], 
    dogBed: [],
    kitchen: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/remys")
      .then((response) => response.json())
      .then((remys) => this.setState({
        remys: remys[0],
        kitchen: remys[0]
      })
      );
  }

  feedRemy = (remys) => {
    this.setState({
      kitchen: [...this.state.kitchen, remys]
    })
  }

  napRemy = (remys) => {
    this.setState({
      dogBed: [...this.state.dogBed, remys]
    });
  }

  kennelRemy = (remys) => {
    this.setState({
      kennel: [...this.state.kennel, remys]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Remy's House</h1>
        <MainContainer 
          kennel={ this.state.kennel } 
          dogBed={ this.state.dogBed }
          kitchen={ this.state.kitchen }
          remys={ this.state.remys }
          feedRemy={ this.feedRemy }
          napRemy={ this.napRemy }
          kennelRemy={ this.kennelRemy }
        />
      </div>
    )
  }
}
