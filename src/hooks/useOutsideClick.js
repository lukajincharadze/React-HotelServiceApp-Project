import { useEffect, useRef } from "react";

export function useOutSideClick(handler, listenCaptring = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Click outside");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listenCaptring);

      return () =>
        document.removeEventListener("click", handleClick, listenCaptring);
    },
    [handler, listenCaptring]
  );

  return ref;
}
