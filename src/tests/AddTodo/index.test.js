import React from "react";
import { render, screen } from "@testing-library/react";
import AddTodo from "../../components/AddTodo";

describe("Testing the AddTodo component", () => {
  test("Testing rendering of the component", () => {
    render(<AddTodo fooAddTodo={() => {}} addTodoValue={""} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
