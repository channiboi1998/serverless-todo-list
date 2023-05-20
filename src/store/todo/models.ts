export type Todo = {
  _id: string;
  label: string;
  checked: boolean;
  createdAt: string;
};

export type UpdateTodo = {
  _id: string;
  label?: string;
  checked?: boolean;
};
