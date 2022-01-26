import React, { useState } from "react";

export default function AddTodo({ fooAddTodo, addTodoValue = "" }) {
  const [value, setValue] = useState(addTodoValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function clearInput() {
    document.getElementById("todoValue").value = "";
    setValue("");
  }

  function addTodo() {
    fooAddTodo(value);
    clearInput();
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        id="todoValue"
        placeholder="ToDo"
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button
          onClick={addTodo}
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Add New ToDo
        </button>
      </div>
    </div>
  );
}
