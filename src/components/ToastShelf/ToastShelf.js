import React from 'react';
import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleToastDismiss } =
    React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
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
