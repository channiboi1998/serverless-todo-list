import axios from "axios";
import { createAppThunk } from "../../utilities/thunks";
import { Todo } from "./models";
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
