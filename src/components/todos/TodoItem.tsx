import { useAppDispatch } from "../../store";
import { Todo, UpdateTodo } from "../../store/todo/models";
import clsx from "clsx";
import { deleteTodo, updateTodo } from "../../store/todo/thunks";
import { setToast } from "../../store/ui/slice";

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const updateRecord = (updateTodoParams: UpdateTodo) => {
    dispatch(updateTodo(updateTodoParams))
      .then(() => {
        dispatch(
          setToast({
            open: true,
            type: "success",
            title: `Todo updated`,
            description: `Todo successfully updated on dynamoDB.`,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setToast({
            open: true,
            type: "danger",
            title: error.code ?? "An error occured",
            description: error.message ?? "Try updating todo again later.",
          })
        );
      });
  };

  const deleteRecord = (id: string) => {
    dispatch(deleteTodo(id))
      .then(() => {
        dispatch(
          setToast({
            open: true,
            type: "success",
            title: "Todo deleted",
            description: `Todo record removed on dynamoDB.`,
          })
        );
      })
      .catch((error) => {
        dispatch(
          setToast({
            open: true,
            type: "danger",
            title: error.code ?? "An error occured",
            description: error.message ?? "Try deleting todo again later.",
          })
        );
      });
  };

  return (
    <div key={todo._id} className="flex flex-row items-center w-full py-1">
      <input
        type="checkbox"
        checked={todo.checked}
        className="cursor-pointer h-4 w-4"
        onChange={() => updateRecord({ _id: todo._id, checked: !todo.checked })}
      />
      <input
        type="text"
        maxLength={30}
        className={clsx(
          "flex-1 focus-visible:outline-none ml-2",
          todo.checked && "line-through"
        )}
        onBlur={(event) =>
          updateRecord({ _id: todo._id, label: event?.currentTarget.value })
        }
        defaultValue={todo.label}
      />
      <button
        className="text-sm py-1 px-2 h-full bg-red-200"
        onClick={() => deleteRecord(todo._id)}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
