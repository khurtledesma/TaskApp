import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import "../App.css";
import '../css/bootstrap.min.css';

function TodoForm({ addTodo }) {

  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4});
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="formInput" onSubmit={handleSubmit}>
      <input
        className="textbox"
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}       
      />
      <button class="btn btn-primary" type="submit">Add to list</button>
    </form>
  )
}

export default TodoForm;