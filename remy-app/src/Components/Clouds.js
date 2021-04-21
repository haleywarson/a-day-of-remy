import React, { Component } from 'react'
import MainContainer from './MainContainer';


export default class Clouds extends Component {
    render() {
        return (
            <div>
                <div id="background-wrap">
                    <div class="x1">
                        <div class="cloud"></div>
                    </div>
                    <div class="x2">
                        <div class="cloud"></div>
                    </div>
                    <div class="x3">
                        <div class="cloud"></div>
                    </div>
                    <div class="x4">
                        <div class="cloud"></div>
                    </div>
                    <div class="x5">
                        <div class="cloud"></div>
                    </div>
                </div>
                <MainContainer
                    kennel={props.kennel}
                    dogBed={this.state.dogBed}
                    kitchen={this.state.kitchen}
                    dogPark={this.state.dogPark}
                    remys={this.state.remys}
                    feedRemy={this.feedRemy}
                    napRemy={this.napRemy}
                    kennelRemy={this.kennelRemy}
                    parkRemy={this.parkRemy}
                />
            </div>
        )
    }
}
