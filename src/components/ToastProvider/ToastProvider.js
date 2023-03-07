import React, { createContext, useMemo, useState } from "react";

export const ToastContext = createContext({});

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = useMemo(() => ({ toasts, setToasts }), [toasts]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
