import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "../../components/Todo";

describe("Testing the Todo component", () => {
  test("Testing rendering of the component", () => {
    render(
      <table>
        <tbody>
          <tr>
            <Todo
              index={1}
              todo={{ id: 3, value: "Wow", isDone: false }}
              fooDoneDone={() => {}}
              fooDelete={() => {}}
            />
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText("Wow")).toBeInTheDocument();
  });
});
