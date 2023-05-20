import { RootState } from "..";
import { sortTodoByCreatedAt } from "../../utilities/todo";
import { Todo } from "./models";

export const getTodos = (state: RootState): Todo[] =>
  sortTodoByCreatedAt(state.todo.todos);
