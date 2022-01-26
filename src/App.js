import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ToDoist</h1>
        <Todos />
      </div>
    );
  }
}
