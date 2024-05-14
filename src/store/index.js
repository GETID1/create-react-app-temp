import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO } from "./actionType";
import { formattedDate } from "../utils";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          ...action.payload,
          updateTime: formattedDate(new Date()),
        },
      ];
    case DELETE_TODO:
      return [...state.filter((todo) => todo.id !== action.payload.id)];
    case DONE_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              done: !todo.done,
              updateTime: formattedDate(new Date()),
            };
          }
          return todo;
        }),
      ];
    case EDIT_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.title,
              updateTime: formattedDate(new Date()),
            };
          }
          return todo;
        }),
      ];
    default:
      return state;
  }
};

export const initTodosState = () => {
  try {
    const state = JSON.parse(localStorage.getItem("todos"));
    return state || [];
  } catch (error) {
    return [];
  }
};

export const saveTodosState = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};
