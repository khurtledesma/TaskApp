import React from "react";

function ToDo ({ todo }) {
    return (
        <div className="mainListItem">
            {todo.task}
            <button type="button">Complete</button>
        </div>
    )
}
export default ToDo;
