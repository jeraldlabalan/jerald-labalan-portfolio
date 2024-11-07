import React, { useEffect } from 'react';
import styles from './ScrollUpStyles.module.css';

function ScrollUp({ setActiveNav }) {
  useEffect(() => {
    const scrollUp = document.querySelector(`.${styles.scrollup}`);

    const handleScroll = () => {
      if (window.scrollY >= 560) {
        scrollUp.classList.add(styles.show_scroll);
      } else {
        scrollUp.classList.remove(styles.show_scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveNav('#home');
  };

  return (
    <a onClick={handleClick} className={styles.scrollup}>
      <i className={`${styles.scrollup__icon} uil uil-arrow-up`}></i>
    </a>
  );
}

export default ScrollUp;
