import React from "react";
import Todo from "./todo";
import "../App.css";

function Todolist ({ todos, completed, removeTodo }) {
    return (
        <div class="mainList">
            {todos.map(todo => (
                <div>
                    <Todo key={todo}
                     todo={todo}
                     completed={completed}
                     removeTodo={removeTodo}/>
                </div>
            ))}
        </div>
    )
}

export default Todolist;
