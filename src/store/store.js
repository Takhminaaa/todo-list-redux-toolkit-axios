import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./tourSlice/todoSlice";

export const store = configureStore({
  reducer: {
    myTodo: todoReducer,
  },
});
