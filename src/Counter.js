import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        count: this.props.initialValue,
    }

    componentDidMount() {
        setInterval(() => {
            this.setState(() => {
                return {
                    count: this.state.count + this.props.increaseValue
                }
            })
        }, this.props.interval);
    }

    render() {
        return (
            <CounterDisplay count={this.state.count} />
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increaseValue: 1,
    interval: 1000,
}