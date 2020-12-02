import React from "react";
import Todo from "./todo";
import "../App.css";

function Todolist ({ todos }) {
    return (
        <ul>
            {todos.map(todo => (
                <Todo key={todo} todo={todo} />
            ))}
        </ul>
    )
}

export default Todolist;
