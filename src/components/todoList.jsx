import React from "react";
import Todo from "./todo";


function Todolist ({ todos, completed, removeTodo }) {
    return (
        <div className="mainList">
            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    completed={completed}
                    removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default Todolist;
