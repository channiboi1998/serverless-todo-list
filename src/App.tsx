import AddTodoForm from "./components/forms/AddTodoForm";
import TodoList from "./components/todos/TodoList";

const App = () => {
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
        <AddTodoForm />
        {/* Todo List */}
        <TodoList />
      </div>
    </div>
  );
};

export default App;
