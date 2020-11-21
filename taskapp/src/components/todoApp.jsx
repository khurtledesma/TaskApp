import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

function TodoApp () {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos ([todo, ...todos]);
    }

    return (
        <div>
            <p>React Todo</p>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )

}

export default TodoApp;