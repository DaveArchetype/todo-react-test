import React, { useState } from "react";
import Todo from "../Todo";
import AddTodo from "../AddTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [addTodoValue, setAddTodoValue] = useState("");

  function getTime() {
    let d = new Date();
    var n = d.getTime();
    return n;
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo));
  }

  function handleDone(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          t.isDone = !t.isDone;
        }

        return t;
      })
    );
  }

  function addNewTodo(value) {
    if (value) {
      setTodos([
        ...todos,
        {
          id: getTime(),
          value: value,
          isDone: false,
        },
      ]);
      setAddTodoValue("");
    } else {
      console.log("Please Add Todo Text");
    }
  }

  return (
    <table className="table">
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <Todo
              index={index + 1}
              todo={todo}
              fooDelete={handleDelete}
              fooDoneDone={handleDone}
            />
          </tr>
        ))}
        <tr>
          <td colSpan="4" className="text-center">
            <AddTodo fooAddTodo={addNewTodo} addTodoValue={addTodoValue} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
