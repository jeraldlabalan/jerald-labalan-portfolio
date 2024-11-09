import React from 'react'
import styles from './HomeStyles.module.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'

function Home() {
  return (
    <section className={`home section container`} id="home">  
      <div className={`${styles.home__container} container grid`}>
        <div className={`${styles.home__content} grid`}>
          <Social />

          <div className={styles.home__img}></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home