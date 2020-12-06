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
            <h1>Shopping List</h1>
            <p>Add items into the box below and click 'add to list'. Click on the 'complete' button when you have added into your cart and it will remove it from your list.</p>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} />
        </div>
    )

}

export default TodoApp;