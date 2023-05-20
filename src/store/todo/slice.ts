import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./models";
import { getTodos } from "./thunks";

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
      .addCase(getTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default todoSlice.reducer;
