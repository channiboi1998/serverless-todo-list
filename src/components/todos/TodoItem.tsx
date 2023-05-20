import { Todo } from "../../store/todo/models";
import clsx from "clsx";

type Props = {
  todo: Todo;
  updateTodo: (todoId: string) => void;
};

const TodoItem = ({ todo, updateTodo }: Props) => {
  return (
    <div
      key={todo.id}
      className="flex flex-row items-center w-full"
      onClick={() => updateTodo(todo.id)}
    >
      <input
        type="checkbox"
        checked={todo.checked}
        className="cursor-pointer h-4 w-4"
      />
      <input
        type="text"
        maxLength={30}
        className={clsx(
          "flex-1 focus-visible:outline-none ml-2",
          todo.checked && "line-through"
        )}
        defaultValue={todo.label}
      />
    </div>
  );
};

export default TodoItem;
