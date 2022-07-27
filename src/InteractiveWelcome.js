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
            <div className="welcome p-6" >
                <div className="bg-white rounded-xl border border-red-700 p-3 mb-5 max-w-fit">
                    <span className="mr-4 text-2xl font-bold">Insert your username here:</span>
                    <input className="border-2 border-black mb-5" name="username" value={this.state.value} onChange={this.handleInput} />
                </div>
                <Welcome name={this.state.value} age={28} />
            </div>
        )
    }
}