import React from "react";
import "./App.css";
import AddComp from "./components/AddComp";
import TodosComp from "./components/TodosComp";
import { reducer, initTodosState, saveTodosState } from "./store";
import { createAddTodoAction } from "./store/actionCreators";

function App() {
  const [todos, dispatch] = React.useReducer(reducer, initTodosState());
  React.useEffect(() => {
    saveTodosState(todos);
  }, [todos]);
  return (
    <div className="App">
      <div className="container">
        <h1 className="p-title">Task Tracker</h1>
        <AddComp
          onAdd={(todoText) => {
            dispatch(createAddTodoAction(todoText));
          }}
        />
        <TodosComp todos={todos} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
