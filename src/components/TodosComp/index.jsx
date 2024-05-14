import React from "react";
import "./index.css";
import TodoItemComp from "../TodoItemComp";

const TodosComp = ({todos, dispatch}) => {
  return (
    <div className="todos-comp-container">
      {
        todos.map((todo) => (
          <TodoItemComp key={todo.id} todo={todo} dispatch={dispatch}/>
        ))
      }
    </div>
  );
};

export default TodosComp;
