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
                    <input name="newTodo" />
                    <button onClick={this.addNewTodo} >Add Item</button>
                    <button onClick={this.clearTodos} >Clear All Todos</button>
                </div>
                <div>
                    <ul>
                        {this.state.items.map((todo, index) => <li id={index} key={index} >{todo} <button onClick={this.removeTodo} >Remove Todo</button></li>)}
                    </ul>
                </div>
            </div>

        )
    }
}