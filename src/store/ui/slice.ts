import { createSlice } from "@reduxjs/toolkit";
import { Toast } from "./models";

type UISlice = {
  toast: Toast;
};

const initialState: UISlice = {
  toast: {
    open: false,
    type: "",
    title: "",
    description: "",
  },
};

export const UISlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setToast(state, action) {
      state.toast = action.payload;
    },
  },
});

export const { setToast } = UISlice.actions;

export default UISlice.reducer;
