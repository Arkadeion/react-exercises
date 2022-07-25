import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return (
            <h1 style={{color: '#A7A7A7', textDecoration: 'underline'}}>
                Counter: {this.props.count}
            </h1>
        )
    }
}