import React, { useContext } from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
import { useEscapeKey } from "../../hooks/useEscapeKey";

function ToastShelf() {
  const { toasts, setToasts } = useContext(ToastContext);

  useEscapeKey(() => setToasts([]));

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ id, variant, message }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast
            variant={variant}
            onClose={() =>
              setToasts((toasts) => toasts.filter((toast) => toast.id !== id))
            }
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
