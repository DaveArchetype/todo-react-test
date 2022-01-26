import React, { Fragment } from "react";

export default function Todo({ index, todo, fooDoneDone, fooDelete }) {
  return (
    <Fragment>
      <td style={{ width: 10 }} className="text-center">
        {index}
      </td>
      <td style={{ width: 15 }} className="text-center">
        <input
          type="checkbox"
          defaultChecked={todo.isDone}
          onChange={() => fooDoneDone(todo)}
        />
      </td>
      <td>{todo.isDone ? <s>{todo.value}</s> : todo.value}</td>
      <td style={{ width: 100 }} className="text-center">
        <button
          onClick={() => fooDelete(todo.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </td>
    </Fragment>
  );
}
