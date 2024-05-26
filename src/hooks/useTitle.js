import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {}, [title]);
  document.title = `${title} - Pet products`;
  return null;
};
