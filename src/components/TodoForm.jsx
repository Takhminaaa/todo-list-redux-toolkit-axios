import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/tourSlice/todoSlice";
import { postTodoRequest } from "../store/thunks/todoThanks";

export default function TodoForm() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = {
      title: value,
      id: Date.now().toString(),
    };
    dispatch(postTodoRequest(newValue));
    setValue("");
  };

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo..."
        value={value}
        onChange={handleChangeValue}
      />
      <button>Add todo</button>
    </form>
  );
}
