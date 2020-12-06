import React from "react";

function ToDo ({ todo }) {
    return (
        <div className="mainListItem">
            {todo.task}
            <button type="button" onclick="removeitem()">Complete</button>
        </div>
    )
}
export default ToDo;
