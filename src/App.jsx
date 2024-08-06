import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { getAllTodo } from "./store/thunks/todoThanks";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo());
  }, []);
  return (
    <div className="app">
      <h1>Todo-redux-toolkit-axios</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
