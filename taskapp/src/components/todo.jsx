import React from "react";

function ToDo ({ todo }) {
    return (
        <div>
            <input type="checkbox" />
            <li>
                {todo.task}
            </li>
        </div>
    )

}
export default ToDo;
