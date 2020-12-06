import React, { useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import "../App.css";
import '../css/bootstrap.min.css'

function TodoApp () {

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        setTodos ([todo, ...todos]);
    }

    return (
        <div className="mainApp">
            <h1>Type in a to-do below!</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )

}

export default TodoApp;