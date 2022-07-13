import React from "react";
import { HelloWorld } from "./HelloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld  />
                <Welcome name={<strong>Franco</strong>} age={28} />
            </div>
        )
    }
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.