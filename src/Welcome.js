import React from "react";
import { Age } from "./Age";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export class Welcome extends React.Component {

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
                <UncontrolledLogin _onLogin={this.onLogin} />
                <Colors items={[{id: 1, name:'Green'}, {id: 2, name:'Red'}, {id: 3, name:'Blue'}, {id: 4, name:'Black'}]} />
            </div>
        )
    }
}


// If a prop isn't passed by the parent, the component will not render anything in place of the prop. However, we can set
// a default value for props in case none is passed from the component's parent using the defaultProps property.

/* Welcome.defaultProps = {
    name: 'Stranger'
} */