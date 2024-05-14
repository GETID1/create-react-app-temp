import { randomId } from "../utils";
import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "./actionType";

export const createAddTodoAction = (todoText) => {
  return {
    type: ADD_TODO,
    payload: {
      id: randomId(),
      title: todoText,
      done: false,
    },
  };
};

export const createDeleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const createDoneTodoAction = (id) => {
  return {
    type: DONE_TODO,
    payload: {
      id,
    },
  };
};
export const createEditTodoAction = (id, title) => {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title,
    },
  };
};
