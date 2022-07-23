import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastButtonPressed: null,
    }

    trackLastButtonClicked = (event) => {
        return this.setState((state) => {

            if (event.target.id === 'button-wrapper') {

                return;

            } else {
                return {
                    lastButtonPressed: event.target.innerHTML
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Last button pressed: {this.state.lastButtonPressed} </h1>
                <div id='button-wrapper' onClick={this.trackLastButtonClicked}>
                    <button>Button 1</button>
                    <button>Button 2</button>
                    <button>Button 3</button>
                </div>
            </div>
        )
    }
}