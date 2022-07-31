import React from "react";

export class TodoList extends React.Component {

    state = {
        items: ['Go to work', 'Go to the gym', 'Clean up the house', 'Sleep']
    }

    addNewTodo = (event) => {

        let newTodo = event.target.previousSibling.value;

        let _items = [...this.state.items]

        _items.push(newTodo);

        this.setState({
            items: _items
        })

        event.target.previousSibling.value = '';
    }

    clearTodos = () => {

        this.setState({
            items: [],
        })

    }

    removeTodo = (event) => {

        let todoToDelete = event.target.parentElement.id;

        let _items = [...this.state.items]

        _items.splice(todoToDelete, 1);

        this.setState({
            items: _items
        })

    }

    render() {
        return (
            <div>
                <div>
                    <input className="border-black border-2 mr-3" name="newTodo" />
                    <button className="rounded-xl border-black border-2 p-1 mr-3" onClick={this.addNewTodo} >Add Item</button>
                    <button className="rounded-xl border-black border-2 p-1" onClick={this.clearTodos} >Clear All Todos</button>
                </div>
                <div>
                   {this.props.render(this.state.items, this.removeTodo)}
                </div>
            </div>

        )
    }
}