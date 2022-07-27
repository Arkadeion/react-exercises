import React from "react";

export class CounterButton extends React.Component {

    render() {
        return (
            <button className="rounded-xl border-black border-2 p-3 mt-3 mr-3" onClick={this.props.incrementCounterOnClick} >Add</button>
        )
    }
}