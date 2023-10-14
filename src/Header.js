import React from 'react';
import { Menu } from 'react-feather';

import VisuallyHidden from './VisuallyHidden';
import useToggle from './use-toggle';
import Drawer from './Drawer';
import styles from './Header.module.css';

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false);

  const menuId = `${React.useId()}-menu-button`;
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'ArrowDown' && document.activeElement.id === menuId) {
        toggleIsMenuOpen();
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuId, toggleIsMenuOpen]);
  return (
    <header role="navigation">
      <a href="">Kaboom</a>

      <nav role="navigation" aria-label="Main menu">
        <button
          id={menuId}
          aria-haspopup="menu"
          aria-expanded={isMenuOpen}
          className={styles.hamburgerBtn}
          onClick={toggleIsMenuOpen}
        >
          <Menu aria-hidden="true" focusable="false"/>
          <VisuallyHidden>Open main menu</VisuallyHidden>
        </button>
        {isMenuOpen && (
          <Drawer handleDismiss={toggleIsMenuOpen}>
            <ul className={styles.navigationList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Submit Work</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>
    </header>
  );
}

export default Header;