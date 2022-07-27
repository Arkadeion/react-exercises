import React from "react";

export class Colors extends React.Component {

    render() {

        return (
            <ul className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8 list-disc list-inside">
                {this.props.items.map((color) => <li key={color.name + color.id} >{color.name}</li>)}
            </ul>
        )
    }
}