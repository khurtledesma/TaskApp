import React from "react";
import Todo from "./todo";

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
