import React, { useEffect, useState } from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import "../App.css";
import '../css/bootstrap.min.css'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function TodoApp () {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storageTodos) {
            setTodos(storageTodos);
        }
    }, []);

    useEffect (() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);


    function addTodo(todo) {
        setTodos ([todo, ...todos]);
    }

    function completed (id) {
        setTodos(
            todos.map(todo=> {
                if (todo.id ===id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !==id));
    }

    return (
        <div className="mainApp">
            <h1>Shopping List</h1>
            <p>Add items into your list below</p>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} 
            removeTodo={removeTodo}
            />
        </div>
    )

}

export default TodoApp;