import React from "react";
import { Age } from "./Age";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Login } from "./Login";

export class Welcome extends React.Component {

    state = {};

    onLogin = (data) => {
        console.log(data);
    }

    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                <Age age={this.props.age} />
                <Counter initialValue={0} increaseValue={1} interval={1000} />
                <ClickCounter />
                <ClickTracker />
                <Login _onLogin={this.onLogin} />
            </div>
        )
    }
}


// If a prop isn't passed by the parent, the component will not render anything in place of the prop. However, we can set
// a default value for props in case none is passed from the component's parent using the defaultProps property.

/* Welcome.defaultProps = {
    name: 'Stranger'
} */