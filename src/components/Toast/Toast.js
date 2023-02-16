import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import React from 'react';
import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';
import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { handleToastDismiss } = React.useContext(ToastContext);
  const IconTag = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        aria-label="Dismiss Message"
        aria-live="off"
        className={styles.closeButton}
        onClick={() => handleToastDismiss(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
