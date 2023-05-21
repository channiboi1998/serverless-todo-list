export const formatDate = (inputDate: Date): string => {
  const day = inputDate.getDate();
  const month = inputDate.toLocaleString("default", { month: "short" });
  const year = inputDate.getFullYear();

  return `${day} ${month} ${year}`;
};
