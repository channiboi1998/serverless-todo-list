import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToast } from "../store/ui/selectors";
import clsx from "clsx";
import { useAppDispatch } from "../store";
import { setToast } from "../store/ui/slice";

const Toast = () => {
  const dispatch = useAppDispatch();
  const toast = useSelector(getToast);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    if (toast && toast.open) {
      timeoutId = setTimeout(() => {
        dispatch(setToast({ ...toast, open: false }));
      }, 3000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [dispatch, toast]);

  if (!toast || toast.open === false) return null;

  return (
    <span
      className={clsx(
        "absolute bottom-20 left-20 w-full max-w-xs p-2",
        toast.type === "success" && "bg-green-200",
        toast.type === "warning" && "bg-orange-200",
        toast.type === "danger" && "bg-red-200"
      )}
    >
      <h4 className="font-semibold">{toast.title}</h4>
      <p className="text-sm">{toast.description}</p>
    </span>
  );
};

export default Toast;
