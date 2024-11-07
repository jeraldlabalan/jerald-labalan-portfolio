import React, {useState} from 'react'
import styles from './QualificationStyles.module.css'

function Qualification() {

  const [toggleState, setToggleState] = useState(1)
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className={`${styles.qualification} section`}>
      <h2 className='section__title'>
        Educational Background
      </h2>
      <span className='section__subtitle'>
        Schools I have gone to
      </span>

      <div className={`${styles.qualification__container} container`}>
        <div className={styles.qualification__tabs}>
        <div className={
          toggleState === 1 
          ? `${styles.qualification__button} ${styles.qualification__active} button__flex` 
          : `${styles.qualification__button} button__flex`}
          onClick={() => toggleTab(1)}>
            <i className=
            {`${styles.qualification__icon}
              uil uil-graduation-cap`}></i>
            Education
          </div>
        </div>
        <div className={styles.qualication__sections}>
          <div className={`${styles.qualification__content} 
                           ${styles.qualification__content_active}`}>
            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>
                  Cavite State University - Bacoor City Campus
                </h3>
                <span className={styles.qualification__subtitle}>
                  Tertiary Institution 
                </span>
                <div className={styles.qualification__calender}>
                  <i className='uil uil-calendar-alt'></i>
                  Present - 2022
                </div> 
              </div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>
            </div>

            <div className={styles.qualification__data}>
              <div></div>
              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div>
                <h3 className={styles.qualification__title}>
                  South East Asia - Institute of Trade and Technology
                </h3>
                <span className={styles.qualification__subtitle}>
                  Senior High School
                </span>
                <div className={styles.qualification__calender}>
                  <i className='uil uil-calendar-alt'></i>
                  2022 - 2020
                </div>
              </div>
            </div>  

            <div className={styles.qualification__data}>
              <div>
                <h3 className={styles.qualification__title}>
                  Golden Acres National High School
                </h3>
                <span className={styles.qualification__subtitle}>
                  Junior High School
                </span>
                <div className={styles.qualification__calender}>
                  <i className='uil uil-calendar-alt'></i>
                  2020 - 2016
                </div>
              </div>

              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

            </div>

            <div className={styles.qualification__data}>
              <div></div>

              <div>
                <span className={styles.qualification__rounder}></span>
                <span className={styles.qualification__line}></span>
              </div>

              <div>
                <h3 className={styles.qualification__title}>
                  Golden Acres Elementary School
                </h3>
                <span className={styles.qualification__subtitle}>
                  Elementary
                </span>
                <div className={styles.qualification__calender}>
                  <i className='uil uil-calendar-alt'></i>
                  2016 - 2010
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification