import React from "react";

function ToDo ({todo, removeTodo}) {


    function handleRemoveClick() {
        removeTodo(todo.id);
    }

    return (
        <div className="mainListItem">
            {todo.task}
            <button className="btn btn-danger" onClick={handleRemoveClick} type="button">Remove</button>
        </div>
    )
}
export default ToDo;
