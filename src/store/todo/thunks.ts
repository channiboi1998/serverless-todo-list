import { createAppThunk } from "./../../utilities/thunks";
import axios from "axios";
import { Todo, UpdateTodo } from "./models";
import { ResponseError } from "../../api";

export const fetchTodos = createAppThunk<Todo[], void>(
  "todo/getTodos",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://anhoximxy7.execute-api.ap-southeast-2.amazonaws.com/dev/todos"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error as ResponseError);
    }
  }
);

export const createTodo = createAppThunk<Todo, string>(
  "todo/createTodo",
  async (label, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        "https://anhoximxy7.execute-api.ap-southeast-2.amazonaws.com/dev/todos",
        { label }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error as ResponseError);
    }
  }
);

export const updateTodo = createAppThunk<Todo, UpdateTodo>(
  "todo/updateTodo",
  async (updateTodo, { rejectWithValue }) => {
    console.log(updateTodo);
    try {
      const { data } = await axios.patch(
        "https://anhoximxy7.execute-api.ap-southeast-2.amazonaws.com/dev/todos",
        updateTodo
      );
      return data;
    } catch (error) {
      return rejectWithValue(error as ResponseError);
    }
  }
);

export const deleteTodo = createAppThunk<{ _id: string }, string>(
  "todo/deleteTodo",
  async (_id, { rejectWithValue }) => {
    console.log(updateTodo);
    try {
      const { data } = await axios.delete(
        "https://anhoximxy7.execute-api.ap-southeast-2.amazonaws.com/dev/todos",
        { data: { _id } }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error as ResponseError);
    }
  }
);
