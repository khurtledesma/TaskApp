import React from "react";

function ToDo ({ todo }) {
    return (
        <div>
            <li class="ToDo-List">
                {todo.task}
                <input type="checkbox" />    
            </li>
            
        </div>
    )

}
export default ToDo;
