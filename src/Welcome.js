import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}!</p>
                <div>
                    {this.props.age >= 18
                        ? <Age age={this.props.age} />
                        : <></>}
                </div>
            </div>
        )
    }
}


// If a prop isn't passed by the parent, the component will not render anything in place of the prop. However, we can set
// a default value for props in case none is passed from the component's parent using the defaultProps property.

/* Welcome.defaultProps = {
    name: 'Stranger'
} */