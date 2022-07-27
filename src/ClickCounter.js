import React from "react";
import { CounterButton } from "./CounterButton";


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
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8" >
                <h1 className="text-xl font-bold">
                    Counter: {this.state.count}
                </h1>
                <CounterButton incrementCounterOnClick={this.incrementCounterOnClick} />
            </div>
        )
    }
}