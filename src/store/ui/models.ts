export type Toast = {
  open: boolean;
  type: "success" | "warning" | "danger" | "";
  title: string;
  description: string;
};
