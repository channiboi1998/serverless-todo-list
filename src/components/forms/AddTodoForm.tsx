import { useForm, FieldValues } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { createTodo } from "../../store/todo/thunks";

type Inputs = {
  label: string;
};

const AddTodoForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const dispatch = useAppDispatch();

  const submit = (formData: FieldValues) => {
    dispatch(createTodo(formData.label))
      .unwrap()
      .then(() => reset())
      .catch((error) => console.log(error));
  };

  return (
    <form
      className="flex flex-row flex-wrap pt-4 pb-1"
      onSubmit={handleSubmit(submit)}
    >
      {errors.label && (
        <div className="bg-red-200 w-full p-2 mb-4 text-sm">
          This field is required
        </div>
      )}
      <input
        type="text"
        className="flex-1 border p-2"
        placeholder="Add new task"
        maxLength={25}
        {...register("label", { required: "Todo label is required" })}
      />
      <button type="submit" className="p-2 ml-2 bg-purple-800 text-white">
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
