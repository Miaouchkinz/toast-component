import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleToastCreation = ({ message, variant }) => {
    const newToast = {
      id: Math.random(),
      message: message,
      variant: variant,
    };

    setToasts([...toasts, newToast]);
  };

  const handleToastDismiss = (id) => {
    const nextToastList = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToastList);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, handleToastCreation, handleToastDismiss }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
