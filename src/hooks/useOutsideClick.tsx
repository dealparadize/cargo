import { useEffect } from "react";

export const useOutsideClick = (
  ref:
    | React.MutableRefObject<undefined>
    | React.MutableRefObject<null>
    | React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const handle = (e: MouseEvent) => {
    // @ts-ignore
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  });
};
