import React from 'react';
import { X as Close } from 'react-feather';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

import styles from './Drawer.module.css';

function Drawer({ handleDismiss, children }) {
  console.log('Drawer');
  React.useEffect(() => {
    function handleKeyDown(event) {
      console.log(event.code);
      if (event.code === 'Escape' || event.code === 'ArrowUp') {
        handleDismiss();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleDismiss]);
  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer}>
            <div>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close aria-hidden="true" focusable="false" size={18} /> Dismiss
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default React.memo(Drawer);