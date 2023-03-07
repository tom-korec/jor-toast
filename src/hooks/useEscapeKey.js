import { useEffect } from "react";

export function useEscapeKey(handleEscape) {
  useEffect(() => {
    function handleEscapeKey(e) {
      if (e.key === "Escape") {
        handleEscape();
      }
    }

    window.addEventListener("keydown", handleEscapeKey);

    return () => window.removeEventListener("keydown", handleEscapeKey);
  }, [handleEscape]);
}
