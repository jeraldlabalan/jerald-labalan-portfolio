import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <h1 className={styles.footer__title}>
          Jerald Labalan
        </h1>

        <ul className={styles.footer__list}>
          <li>
            <a href="#about" className={styles.footer__link}>
              About
            </a>
            <a href="#portfolio" className={styles.footer__link}>
              Projects
            </a>
            <a href="#skills" className={styles.footer__link}>
              Skills
            </a>
            <a href="#qualification" className={styles.footer__link}>
              Qualifications
            </a>
          </li>
        </ul>

        <div className={styles.footer__social}>
          <a href="https://www.facebook.com/jerald.labalan.5" 
          className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-facebook'></i>
          </a>

          <a href="https://www.linkedin.com/in/jerald-labalan-91b320173/"
            className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-linkedin'></i>
          </a>

          <a href="https://github.com/jeraldlabalan"
            className={styles.footer__social_link} target="_blank">
            <i className='bx bxl-github'></i>
          </a>
        </div>

        <span className={styles.footer__copy}>
          &#169; Jerald Labalan. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer