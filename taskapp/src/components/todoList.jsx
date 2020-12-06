import React from "react";
import Todo from "./todo";
import "../App.css";

function Todolist ({ todos }) {
    return (
        <div>
            {todos.map(todo => (
                <div>
                    <Todo key={todo} todo={todo} />
                </div>
            ))}
        </div>
    )
}

export default Todolist;
