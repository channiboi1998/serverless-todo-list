import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "./models";
import { createTodo, deleteTodo, fetchTodos, updateTodo } from "./thunks";

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
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todos = state.todos.map((todo: Todo) =>
          todo._id === action.payload._id ? action.payload : todo
        );
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        const deletedTodoId = action.payload._id;
        // Filter out the deleted todo from the state array
        state.todos = state.todos.filter((todo) => todo._id !== deletedTodoId);
      });
  },
});

export default todoSlice.reducer;
