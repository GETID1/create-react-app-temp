import React from "react";
import "./index.css";
import { MdDone, MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";

const TodoItemComp = ({ done }) => {
  return (
    <div className="todo-item-comp-container">
      <div
        className="todo-item-comp-line"
        style={{
          backgroundColor: done ? "#1cc21c" : "#9218ff",
        }}
      ></div>
      <div className="todo-item-comp-main">
        <h2 className="todo-item-comp-main-title">take a task</h2>
        <div className="todo-item-comp-main-footer">
          <div className="t-i-c-m-f-time">May 13, 06:47 p.m.</div>
          <div className="t-i-c-m-f-utils">
            <MdDone />
            <MdOutlineModeEdit />
            <MdOutlineDelete  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComp;
