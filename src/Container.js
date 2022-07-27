import React from "react";

export class Container extends React.Component {
    render() {
        return(
            <div className="bg-white rounded-xl border border-red-700 p-8 max-w-fit">
                {this.props.children}
            </div>
        )
    }
}