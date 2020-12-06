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
            <button class="btn btn-success" onclick={handleRemoveClick} type="button">Complete</button>
        </div>
    )
}
export default ToDo;
