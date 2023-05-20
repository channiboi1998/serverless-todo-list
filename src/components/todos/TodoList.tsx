import { Todo } from "../../store/todo/models";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/todo/selectors";

const TodoList = () => {
  const todos = useSelector(getTodos);
  return (
    <div className="pb-3 pt-1">
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo._id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
