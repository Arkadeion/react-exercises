import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastButtonPressed: null,
    }

    trackLastButtonClicked = (event) => {
        return this.setState(() => {
            return {
                lastButtonPressed: event.target.innerHTML
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Last button pressed: {this.state.lastButtonPressed} </h1>
                <div id='button-wrapper'>
                    <button id='b1' onClick={this.trackLastButtonClicked}>Button 1</button>
                    <button id='b2' onClick={this.trackLastButtonClicked}>Button 2</button>
                    <button id='b3' onClick={this.trackLastButtonClicked}>Button 3</button>
                </div>
            </div>
        )
    }
}