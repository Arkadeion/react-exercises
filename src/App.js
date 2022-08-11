import React from "react";
import { InteractiveWelcome } from "./InteractiveWelcome";
import './index.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export class App extends React.Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path='/' element={<InteractiveWelcome />} />
                </Routes>
            </div>
        )
    }
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.