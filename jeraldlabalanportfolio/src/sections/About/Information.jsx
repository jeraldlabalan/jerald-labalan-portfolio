import React from 'react'
import styles from './AboutStyles.module.css'

function Information() {
  return (
    <div className={`${styles.about__info} grid`}>
      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
          <i className="bx bx-award about__icon"></i>
          Experience
        </h3>
        <span className={styles.about__subtitle}>
          2 Years Working
        </span>
      </div>

      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
          <i className="bx bx-briefcase-alt about__icon"></i>
          Completed
        </h3>
        <span className={styles.about__subtitle}>
          5+ Projects
        </span>
      </div>

      <div className={styles.about__box}>
        <h3 className={styles.about__title}>
          <i className='bx bx-support about__icon'></i>
          Support
        </h3>
        <span className={styles.about__subtitle}>
          Online 24/7
        </span>
      </div>

    </div>
  )
}

export default Information