import React from "react";
import { TodoList } from "./TodoList";

export class Container extends React.Component {
    
    render() {
        return (
            <div>
                <div className="bg-white rounded-xl border border-red-700 p-8 max-w-fit">
                    <div>
                        <div className="text-xl font-bold mb-6">{this.props.title}</div>
                    </div>
                    <h1 className="text-2xl font-bold mb-4">This is a Todo List</h1>
                    <TodoList render={(items, removeTodo) => 
                        <ul className="list-decimal list-inside mt-8">
                            {items.map((todo, index) => <li className="text-xl font-semibold mb-4" id={index} key={index} >{todo} <button className="text-base font-normal rounded-xl border-black border-2 p-1 bg-slate-400" onClick={removeTodo}>Remove Todo</button></li>)}
                        </ul>
                    } />
                </div>
            </div>
        )
    }
}