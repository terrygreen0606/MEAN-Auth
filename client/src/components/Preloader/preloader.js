import React, { Component } from 'react'

export class Preloader extends Component {
    render() {
        return (
            <div className="preloader">
                <h1>Loading in progress...</h1>
                <div id="cooking">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div id="area">
                        <div id="sides">
                            <div id="pan"></div>
                            <div id="handle"></div>
                        </div>
                        <div id="pancake">
                            <div id="pastry"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Preloader
