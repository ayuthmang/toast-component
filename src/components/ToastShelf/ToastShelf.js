import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useEscapeKey from '../../hooks/use-escape-key';

function ToastShelf() {
  console.log('ToastShelf renders')
  const { toasts, dismissToast, dismissAllToasts } = React.useContext(ToastContext)

  const handleEscape = React.useCallback(() => {
    dismissAllToasts()
  }, [dismissAllToasts])

  useEscapeKey(handleEscape)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notifications"
    >
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
