import React from 'react'
import styles from "./SkillsStyles.module.css"


function Frontend() {
  return (
    <div className={styles.skills__content}>
      <h3 className={styles.skills__title}>
        Frontend Development
      </h3>

      <div className={styles.skills__box}>
        <div className={styles.skills__group}>
          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>

            <div>
              <h3 className={styles.skills__name}>
                HTML
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
                CSS
              </h3>
              <span className={styles.skills__level}>
                Intermediate
              </span>
            </div>
          </div>

          <div className={styles.skills__data}>
            <i className='bx bx-badge-check'></i>
            <div>
              <h3 className={styles.skills__name}>
                JavaScript
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
                Bootstrap
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
                Git
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
                React
              </h3>
              <span className={styles.skills__level}>
                Basic
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend