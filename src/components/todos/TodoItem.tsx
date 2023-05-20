import { useAppDispatch } from "../../store";
import { Todo } from "../../store/todo/models";
import clsx from "clsx";
import { updateTodo } from "../../store/todo/thunks";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div key={todo._id} className="flex flex-row items-center w-full">
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
    </div>
  );
};

export default TodoItem;
