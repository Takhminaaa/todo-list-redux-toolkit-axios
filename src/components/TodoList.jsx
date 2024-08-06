import React from "react";
import { useSelector } from "react-redux";
import { store } from "../store/store";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector((store) => store.myTodo);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
}
