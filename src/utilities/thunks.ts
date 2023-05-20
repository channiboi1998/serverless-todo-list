import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkApiConfig } from "../store";

/**
 * This is a higher-order function that takes in two parameters:
 *
 * First Parameter: The `type` of the Redux action that will be dispatched.
 * Second Parameter: An `AsyncThunkPayloadCreator` function that defines how the async logic will be executed.
 */
export const createAppThunk = <Returned, ThunkArg = void>(
  type: string, // The type of the Redux action
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig> // The async function to execute.
) => createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(type, payloadCreator);
