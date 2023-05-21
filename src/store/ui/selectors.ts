import { RootState } from "..";
import { Toast } from "./models";

export const getToast = (state: RootState): Toast => state.UI.toast;
