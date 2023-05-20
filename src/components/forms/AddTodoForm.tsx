import { FormEvent } from "react";

const AddTodoForm = () => {
  const submit = (event: FormEvent) => {
    event?.preventDefault();
    alert("form submitted");
  };

  return (
    <form className="flex flex-row pt-4 pb-1" onSubmit={submit}>
      <input
        type="text"
        className="flex-1 border p-2"
        placeholder="Add new task"
      />
      <button type="submit" className="p-2 ml-2 bg-purple-800 text-white">
        Add Task
      </button>
    </form>
  );
};

export default AddTodoForm;
