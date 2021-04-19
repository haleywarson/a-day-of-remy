import './App.css';
import React, { Component } from 'react'
import MainContainer from './Components/MainContainer';

export default class App extends Component {

  state = {
    kennel: [], 
    dogBed: [],
    kitchen: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/remys")
      .then((response) => response.json())
      .then((remys) => this.setState({
        kennel: remys[0]
      })
      );
  }

  render() {
    return (
      <div className="App">
        <h2>Remy's House</h2>
        <MainContainer 
          kennel={ this.state.kennel } 
          dogBed={ this.state.dogBed }
          kitchen={ this.state.kitchen }
        />
      </div>
    )
  }
}
