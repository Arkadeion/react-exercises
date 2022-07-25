import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {

    state = {
        value: '',
    }

    handleInput = (event) => {

        let inputValue = event.target.value;
        this.setState({ value: inputValue })

    }

    render() {
        return (
            <div className="welcome" >
                <input name="username" value={this.state.value} onChange={this.handleInput} />
                <Welcome name={this.state.value} age={28} />
            </div>
        )
    }
}