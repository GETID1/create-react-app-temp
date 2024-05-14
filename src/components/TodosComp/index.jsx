import React from "react";
import "./index.css";
import TodoItemComp from "../TodoItemComp";

const TodosComp = ({ todos, dispatch }) => {
  return (
    <div className="todos-comp-container">
      {todos.length === 0 ? (
        <div className="todos-comp-empty">No todos, add one now!</div>
      ) : (
        <>
          {todos.map((todo, idx) => (
            <TodoItemComp
              key={todo.id}
              todo={todo}
              dispatch={dispatch}
              style={{
                marginRight: idx % 4 === 3 ? 0 : "10px",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TodosComp;
