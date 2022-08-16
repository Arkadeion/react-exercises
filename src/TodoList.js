import React from "react";

export class TodoList extends React.Component {

    state = {
        inputValue: '',
        items: ['Go to work', 'Go to the gym', 'Clean up the house'],
    }

    addNewTodo = () => {

        if (this.state.inputValue !== '') {

            this.setState(() => {
                return {
                    items: [...this.state.items, this.state.inputValue],
                    inputValue: '',
                }
            })
        }}

        handleInput = (event) => {

            this.setState({
                inputValue: event.target.value,
            })

        }

        render() {
            return (
                <div>
                    <div>
                        <input onChange={this.handleInput} name="newTodo" />
                        <button onClick={this.addNewTodo} >Add Item</button>
                    </div>
                    <div>
                        <ul>
                            {this.state.items.map((todo) => <li>{todo}</li>)}
                        </ul>
                    </div>
                </div>

            )
        }
    }