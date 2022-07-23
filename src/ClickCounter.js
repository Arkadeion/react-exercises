import React from "react";


export class ClickCounter extends React.Component {

    state = {
        count: this.props.initialValue ?? 0,
        incrementValue: this.props.incrementValue ?? 1
    }

    incrementCounterOnClick = () => {
        return this.setState((state) => {
            return {
                count: state.count + state.incrementValue
            }
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Counter: {this.state.count}
                </h1>
                <button onClick={this.incrementCounterOnClick} >Add</button>
            </div>
        )
    }
}