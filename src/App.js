import React from "react";
import './index.css';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (
            <div className="welcome p-6 m-4">
                <div>
                    <h1 className="text-2xl font-semibold mb-4">Single-Page Application</h1>
                    <hr class="border-2 border-red-500 mb-4" />
                </div>
                <Routes>
                    <Route path='/' element={<Welcome name={'Franco'} />} />
                </Routes>
            </div>
        )
    }
}

// In order to pass a JSX expression as a prop, you need to embed it in curly braces "{}", as done above.