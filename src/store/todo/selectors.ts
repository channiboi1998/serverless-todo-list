import { RootState } from "..";
import { Todo } from "./models";

export const getTodos = (state: RootState): Todo[] => state.todo.todos;
