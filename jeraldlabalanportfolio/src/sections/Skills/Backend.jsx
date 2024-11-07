import React from 'react'
import styles from "./SkillsStyles.module.css"


function Backend() {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>
        Backend Development
      </h3>
      <div className={styles.skills__box}>
        <div className={styles.skills__group}>
          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className={styles.skills__name}>
                PHP
              </h3>
              <span className={styles.skills__level}>
                Basic
              </span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className={styles.skills__name}>
                NodeJS
              </h3>
              <span className={styles.skills__level}>
                Basic
              </span>
            </div>
          </div>
        </div>

        <div className={styles.skills__group}>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className={styles.skills__name}>
               Python
              </h3>
              <span className={styles.skills__level}>
               Basic
              </span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className={styles.skills__name}>
               MySQL
              </h3>
              <span className={styles.skills__level}>
               Intermediate
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Backend