import React from "react";
import '../css/bootstrap.min.css';

function ToDo ({ todo, completed, removeTodo}) {

    function handlecheckboxClick() {
        completed(todo.id);
    } 

    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div className="mainListItem">
            {todo.task}
            <button class="btn btn-danger" onClick={handleRemoveClick} type="button">Remove</button>
        </div>
    )
}
export default ToDo;