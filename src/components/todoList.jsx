import React from "react";
import Todo from "./todo";
import "../App.css";

function Todolist ({ todos, completed, removeTodo }) {
    return (
        <div className="mainList">
            {todos.map(todo => (
                <div>
                    <Todo 
                     key={todo.id}
                     todo={todo}
                     completed={completed}
                     removeTodo={removeTodo}/>
                </div>
            ))}
        </div>
    )
}

export default Todolist;
