import React from 'react';
import useKeyDown from '../../hooks/useKeydown';

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

  const handleClearToasts = () => setToasts([]);
  useKeyDown('Escape', handleClearToasts);

  const ctxValue = React.useMemo(() => {
    return {
      toasts,
      handleToastCreation,
      handleToastDismiss,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toasts]);

  return (
    <ToastContext.Provider value={ctxValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
