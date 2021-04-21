import React, { Component } from 'react'
import MainContainer from './MainContainer'

export default class Clouds extends Component {
    render() {
        return (
            <div id="cloud-container">
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
                    kennel={ this.props.kennel } 
                    dogBed={ this.props.dogBed }
                    kitchen={ this.props.kitchen }
                    dogPark={ this.props.dogPark }
                    remys={ this.props.remys }
                    feedRemy={ this.feedRemy }
                    napRemy={ this.napRemy }
                    kennelRemy={ this.kennelRemy }
                    parkRemy={ this.parkRemy }
                />
            </div>
        )
    }
}
