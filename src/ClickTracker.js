import React from "react";

export class ClickTracker extends React.Component {

    state = {
        lastButtonPressed: null,
    }

    trackLastButtonClicked = (event) => {
        return this.setState((state) => {

            if (event.target.id === 'button-wrapper') {

                return;

            } else {
                return {
                    lastButtonPressed: event.target.id
                }
            }
        })
    }

    render() {
        return (
            <div className="bg-white rounded-xl border-2 border-black max-w-fit p-4 mb-8">
                <h1 className="text-lg font-bold">Last button pressed: {this.state.lastButtonPressed} </h1>
                <div id='button-wrapper' onClick={this.trackLastButtonClicked}>
                    <button className="mr-4" id='cat' style={{ height: 100, width: 100, backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg)', backgroundSize: 'cover' }} ></button>
                    <button className="mr-4" id='dog' style={{ height: 100, width: 100, backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg)', backgroundSize: 'cover' }} ></button>
                    <button id='chipmunk' style={{ height: 100, width: 100, backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Streifenhoernchen.jpg/640px-Streifenhoernchen.jpg)', backgroundSize: 'cover' }} ></button>
                </div>
            </div>
        )
    }
}