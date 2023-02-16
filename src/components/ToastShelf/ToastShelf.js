import React from 'react';
import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleToastDismiss, handleClearToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    function handleEscapeKey(e) {
      if (e.code === 'Escape') {
        handleClearToasts();
      }
    }
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleClearToasts]);

  return (
    <ol
      role="region"
      aria-live="assertive"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              message={message}
              onDismiss={() => handleToastDismiss(id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
