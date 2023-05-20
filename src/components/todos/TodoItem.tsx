import { useAppDispatch } from "../../store";
import { Todo } from "../../store/todo/models";
import clsx from "clsx";
import { deleteTodo, updateTodo } from "../../store/todo/thunks";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div key={todo._id} className="flex flex-row items-center w-full py-1">
      <input
        type="checkbox"
        checked={todo.checked}
        className="cursor-pointer h-4 w-4"
        onChange={() =>
          dispatch(updateTodo({ _id: todo._id, checked: !todo.checked }))
        }
      />
      <input
        type="text"
        maxLength={30}
        className={clsx(
          "flex-1 focus-visible:outline-none ml-2",
          todo.checked && "line-through"
        )}
        onBlur={(event) =>
          dispatch(
            updateTodo({ _id: todo._id, label: event?.currentTarget.value })
          )
        }
        defaultValue={todo.label}
      />
      <button
        className="text-sm py-1 px-2 h-full bg-red-200"
        onClick={() => dispatch(deleteTodo(todo._id))}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
