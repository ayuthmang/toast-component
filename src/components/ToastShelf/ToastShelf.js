import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, dismissToast, dismissAllToasts } = React.useContext(ToastContext)

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        dismissAllToasts()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [dismissAllToasts])

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast variant={variant} onClose={() => dismissToast(id)}>
              {message}
            </Toast>
          </li>
        )
      })}
    </ol>
  )
}

export default ToastShelf;
