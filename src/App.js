import React from "react";
import { HelloWorld } from "./HelloWorld";
import { InteractiveWelcome } from "./InteractiveWelcome";
import './index.css';

export class App extends React.Component {
    render() {
        return (
            <div>
{/*                 <HelloWorld  /> */}
                <InteractiveWelcome />
            </div>
        )
    }
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.