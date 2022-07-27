import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    state = {
        count: this.props.initialValue,
    }

    componentDidMount() { // If the interval is initialized with a life cycle method, the constructor is not required
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
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increaseValue: 1,
    interval: 1000,
}