import React from "react";
import "./index.css";
import TodoItemComp from "../TodoItemComp";

const TodosComp = () => {
  return (
    <div className="todos-comp-container">
      <TodoItemComp done={true}/>
    </div>
  );
};

export default TodosComp;
