import React, { useState, useEffect } from 'react';
import styles from './HeaderStyles.module.css';
import Logo from '../../assets/header-logo-removebg.png';
import ScrollUp from '../ScrollUp/ScrollUp';

function Header() {
  /*===== TOGGLE MENU ON MOBILE VIEW =====*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /* ============== Change Background Header ============= */
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY >= 80) {
        header.classList.add(styles.scrollHeader);
      } else {
        header.classList.remove(styles.scrollHeader);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${styles.container}`}>
        <a href="index.html" className={styles.nav__logo}>
          <img className={styles.logo} src={Logo} alt="This is the logo" />
        </a>

        <div className={`${styles.nav__menu} ${Toggle ? styles.show__menu : ""}`}>
          <ul className={`${styles.nav__list} ${styles.grid}`}>
            <li className={styles.nav__item}>
              <a href="#home" onClick={() => setActiveNav('#home')}
                 className={activeNav === '#home' ? `${styles.nav__link} ${styles.active__link}` : `${styles.nav__link}`}>
                <i className={`uil uil-estate ${styles.nav__icon}`}></i> Home
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#about" onClick={() => setActiveNav('#about')}
                 className={activeNav === '#about' ? `${styles.nav__link} ${styles.active__link}` : `${styles.nav__link}`}>
                <i className={`uil uil-user ${styles.nav__icon}`}></i> About
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#skills" onClick={() => setActiveNav('#skills')}
                 className={activeNav === '#skills' ? `${styles.nav__link} ${styles.active__link}` : `${styles.nav__link}`}>
                <i className={`uil uil-file-alt ${styles.nav__icon}`}></i> Skills
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')}
                 className={activeNav === '#portfolio' ? `${styles.nav__link} ${styles.active__link}` : `${styles.nav__link}`}>
                <i className={`uil uil-scenery ${styles.nav__icon}`}></i> Portfolio
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#contact" onClick={() => setActiveNav('#contact')}
                 className={activeNav === '#contact' ? `${styles.nav__link} ${styles.active__link}` : `${styles.nav__link}`}>
                <i className={`uil uil-message ${styles.nav__icon}`}></i> Contact
              </a>
            </li>
          </ul>
          <i className={`uil uil-times ${styles.nav__close}`} onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className={styles.nav__toggle} onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
      <ScrollUp setActiveNav={setActiveNav} />
    </header>
  );
}

export default Header;
