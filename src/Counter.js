import React from "react";

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
            <h1>
                Counter: {this.state.count}
            </h1>
        )
    }
}

Counter.defaultProps = {
    initialValue: 0,
    increaseValue: 1,
    interval: 1000,
}