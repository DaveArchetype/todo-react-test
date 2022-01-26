import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Todos from "../../components/Todos";

describe("Testing the Todos component", () => {
  test("Testing rendering of the component", () => {
    render(<Todos />);
  });
  test("Testing adding a new Todo using AddTodo which should be rendered in the Todos", () => {
    render(<Todos />);
    fireEvent.change(screen.getByPlaceholderText("ToDo"), {
      target: { value: "To learn more about jest and testig-library/react" },
    });
    fireEvent.click(screen.getByText("Add New ToDo"));
    expect(
      screen.getByText("To learn more about jest and testig-library/react")
    ).toBeInTheDocument();
  });
  test("Testing deleting a Todo", () => {
    render(<Todos />);
    fireEvent.change(screen.getByPlaceholderText("ToDo"), {
      target: { value: "To learn more about jest and testig-library/react" },
    });
    fireEvent.click(screen.getByText("Add New ToDo"));
    expect(
      screen.getByText("To learn more about jest and testig-library/react")
    ).toBeInTheDocument();
    fireEvent.click(screen.getByText("Delete"));
    expect(
      screen.queryByText("To learn more about jest and testig-library/react")
    ).not.toBeInTheDocument();
  });
});
