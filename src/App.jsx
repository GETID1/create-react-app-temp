import React from "react";
import "./App.css";
import AddComp from "./components/AddComp";
import TodosComp from "./components/TodosComp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="p-title">Task Tracker</h1>
        <AddComp
          onAdd={(todoText) => {
            console.log("Add button clicked", todoText);
          }}
        />
        <TodosComp />
      </div>
    </div>
  );
}

export default App;
