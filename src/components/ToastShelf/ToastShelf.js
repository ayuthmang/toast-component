import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {

  function handleToastClose(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(nextToasts)
  }

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onClose={() => handleToastClose(id)}>{message}</Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf;
