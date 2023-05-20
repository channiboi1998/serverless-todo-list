type Todo = {
  id: string;
  label: string;
  checked: boolean;
};

const App = () => {
  const todo: Todo[] = [{ id: "key_1", label: "Buy water", checked: true }];

  return (
    <div className="min-h-screen flex justify-center items-center shadow-lg p-4 bg-purple-800">
      {/* Todo Wrapper */}
      <div className="w-full max-w-md px-4 bg-white">
        {/* Todo Header */}
        <div className="flex flex-row py-4 border-b">
          <h1 className="flex-1 text-5xl font-semibold">Todo</h1>
          <div>
            <h3 className="text-lg font-medium">Today</h3>
            <p className="text-sm">17 Feb 2022</p>
          </div>
        </div>
        {/* Todo Form */}
        <div className="flex flex-row pt-4 pb-1">
          <input
            type="text"
            className="flex-1 border p-2"
            placeholder="Add new task"
          />
          <button className="p-2 ml-2 bg-purple-800 text-white">
            Add Task
          </button>
        </div>
        {/* Todo List */}
        <div className="flex flex-row items-center pb-4 pt-1">
          {todo &&
            todo.map((todo: Todo) => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.checked}
                  className="h-4 w-4"
                />
                <label className="flex-1 ml-2">{todo.label}</label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
