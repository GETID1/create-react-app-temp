import React from "react";
import "./index.css";
import { MdDone, MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
import {
  createDeleteTodoAction,
  createDoneTodoAction,
  createEditTodoAction,
} from "../../store/actionCreators";

const TodoItemComp = ({ todo, dispatch, style }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [tempTitle, setTempTitle] = React.useState(todo.title);
  const dispatchEditTodoAction = (id, title) => {
    if (tempTitle === todo.title) return;
    dispatch(createEditTodoAction(todo.id, tempTitle));
  };
  return (
    <div className="todo-item-comp-container" style={style}>
      <div
        className="todo-item-comp-line"
        style={{
          backgroundColor: todo.done ? "#1cc21c" : "#9218ff",
        }}
      ></div>
      <div className="todo-item-comp-main">
        {isEdit ? (
          <input
            type="text"
            className="todo-item-comp-main-title-input"
            autoFocus
            value={tempTitle}
            onChange={(e) => {
              const newTitle = e.target.value.trim();
              setTempTitle(newTitle);
            }}
            onBlur={() => {
              setIsEdit(false);
              dispatchEditTodoAction(todo.id, tempTitle);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setIsEdit(false);
                dispatchEditTodoAction(todo.id, tempTitle);
              }
            }}
          />
        ) : (
          <h2
            className="todo-item-comp-main-title"
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.title}
          </h2>
        )}

        <div className="todo-item-comp-main-footer">
          <div className="t-i-c-m-f-time">{todo.updateTime}</div>
          <div className="t-i-c-m-f-utils">
            <MdDone
              onClick={() => {
                dispatch(createDoneTodoAction(todo.id));
              }}
            />
            <MdOutlineModeEdit
              onClick={() => {
                if (todo.done) return;
                setIsEdit(true);
              }}
            />
            <MdOutlineDelete
              onClick={() => {
                dispatch(createDeleteTodoAction(todo.id));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItemComp;
