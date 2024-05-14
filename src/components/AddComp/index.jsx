import React from "react";
import "./index.css";

const AddComp = ({ onAdd }) => {
  const [todoText, setTodoText] = React.useState("");
  return (
    <div className="add-comp-container">
      <input
        className="add-comp-input"
        type="text"
        placeholder="New task"
        value={todoText}
        onInput={(e) => {
          const value = e.target.value.trim();
          setTodoText(value);
        }}
      />
      <button
        className="add-comp-button"
        onClick={() => {
          if (todoText) {
            onAdd?.(todoText);
            setTodoText("");
          }
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default AddComp;
