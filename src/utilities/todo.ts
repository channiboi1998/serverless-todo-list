import { Todo } from "../store/todo/models";

export const sortTodoByCreatedAt = (
  todos: Todo[],
  direction: "asc" | "desc" = "desc"
) => {
  if (todos) {
    const sortedTodo = [...todos].sort((a: Todo, b: Todo) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();

      return direction === "asc" ? dateA - dateB : dateB - dateA;
    });

    return sortedTodo;
  }

  return todos;
};
