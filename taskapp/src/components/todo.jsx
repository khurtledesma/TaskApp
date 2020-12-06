import React from "react";
import '../css/bootstrap.min.css';

function ToDo ({ todo }) {
    return (
        <div className="mainListItem">
            {todo.task}
            <button class="btn btn-success" type="button" onclick>Complete</button>
        </div>
    )
}
export default ToDo;
