import React, { useState } from "react";

function TodoForm( { addTodo }) {
    const [todos, setTodos] = useState({
        id:"",
        task: "",
        completed: false
    })
    
    function handleTaskInputChange() {
        setTodo({...todo, task:e.target.value })
    }

    function handleSubmit(e) {
        e,preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo,id: uuid.v4() });
            //rest task input
            setTodo([{ ...todo, task:"" }])
        }
    }
    return (
        <form>
            <input
                name="task"
                type="text"
                value="todo.task"
                onChange={handleTaskInputChange}
            />

            <button />
        </form>
    )
}

export default TodoForm;

