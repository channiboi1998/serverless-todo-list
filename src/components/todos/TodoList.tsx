import { useState } from "react";
import { Todo } from "../../store/todo/models";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "key_1", label: "Buy water", checked: true },
  ]);

  // Handles update of todo checked status
  const updateTodo = (todoId: string): void => {
    setTodos((prevTodos: Todo[]) => {
      return prevTodos.map((todo: Todo) => {
        if (todo.id === todoId) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    });
  };

  return (
    <div className="pb-4 pt-1">
      {todos &&
        todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} />
        ))}
    </div>
  );
};

export default TodoList;
