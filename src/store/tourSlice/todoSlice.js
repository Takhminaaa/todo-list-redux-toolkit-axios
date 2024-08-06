import { createSlice } from "@reduxjs/toolkit";
import { getAllTodo } from "../thunks/todoThanks";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    // deleteTodo: (state, action) => {
    //   state.todos = state.todos.filter((item) => item.id !== action.payload);
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTodo.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
