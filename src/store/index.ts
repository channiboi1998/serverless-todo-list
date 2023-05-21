import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo/slice";
import UIReducer from "./ui/slice";
import { ResponseError } from "../api";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    UI: UIReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type ThunkApiConfig = {
  dispatch: AppDispatch; // The dispatch function used to dispatch actions.
  rejectValue: ResponseError; // The type of error value that will be rejected by createAsyncThunk functions.
  state: RootState; // The type of the global state used in the app.
};

export const useAppDispatch = () => useDispatch<AppDispatch>();
