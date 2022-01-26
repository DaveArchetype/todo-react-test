import React from "react";
import Todos from "./components/Todos";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center">ToDoist</h1>
      <Todos />
    </div>
  );
}
