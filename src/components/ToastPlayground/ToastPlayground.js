import Button from '../Button';
import React from 'react';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');
  const [generatedToasts, setGeneratedToasts] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newToast = {
      id: Math.random(),
      message: message,
      variant: variant,
    };
    setGeneratedToasts([...generatedToasts, newToast]);

    // reset form fields
    setMessage('');
    setVariant('notice');
  };

  const handleToastDismiss = (id) => {
    const nextToastList = generatedToasts.filter(
      (toast) => toast.id !== id
    );
    setGeneratedToasts(nextToastList);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf
        toasts={generatedToasts}
        handleToastDismiss={handleToastDismiss}
      />

      <form
        onSubmit={handleSubmit}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          {VARIANT_OPTIONS.map((option) => {
            return (
              <div
                key={option}
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                <label htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="toast-variant"
                    value={option}
                    checked={option === variant}
                    onChange={() => setVariant(option)}
                  />
                  {option}
                </label>
              </div>
            );
          })}
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
