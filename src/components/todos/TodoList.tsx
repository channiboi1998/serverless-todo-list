import { useEffect } from "react";
import { Todo } from "../../store/todo/models";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/todo/selectors";

const TodoList = () => {
  const todos = useSelector(getTodos);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // Handles update of todo checked status
  const updateTodo = (todoId: string): void => {
    console.log(todoId);
  };

  return (
    <div className="pb-4 pt-1">
      {todos &&
        todos.length > 0 &&
        todos.map((todo: Todo) => (
          <TodoItem key={todo._id} todo={todo} updateTodo={updateTodo} />
        ))}
    </div>
  );
};

export default TodoList;
