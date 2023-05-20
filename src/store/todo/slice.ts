import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./models";
import { fetchTodos } from "./thunks";

export interface TodoState {
  status: string;
  todos: Todo[];
}

const initialState: TodoState = {
  status: "idle",
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "fulfilled";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default todoSlice.reducer;
