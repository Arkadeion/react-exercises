import React from "react";

export class Container extends React.Component {
    render() {
        return (
            <div>
                <div className="bg-white rounded-xl border border-red-700 p-8 max-w-fit">
                <div>
                    <div className="text-xl font-bold mb-6">{this.props.title}</div>
                </div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}