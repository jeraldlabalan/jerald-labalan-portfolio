// import styles from './HeroStyles.module.css';
// import heroImg from '../../assets/hero-img.png';
// import sun from '../../assets/sun.svg';
// import moon from '../../assets/moon.svg';
// import twitterLight from '../../assets/twitter-light.svg';
// import twitterDark from '../../assets/twitter-dark.svg';
// import githubLight from '../../assets/github-light.svg';
// import githubDark from '../../assets/github-dark.svg';
// import linkedinLight from '../../assets/linkedin-light.svg';
// import linkedinDark from '../../assets/linkedin-dark.svg';
// import cv from '../../assets/cv.pdf';
// import { useTheme } from '../../common/ThemeContext';


// function Hero() {
//   const { theme } = useTheme();

//   const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
//   const githubIcon = theme === 'light' ? githubLight : githubDark;
//   const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

//   return (
//     <section id='hero' className={styles.container}>
//       <div className={styles.colorModeContainer}>
//         <img className={styles.hero} 
//         src={heroImg} 
//         alt="Profile picture of Jerald Labalan" />
//       </div>
//       <div className={styles.info}>
//         <h1>Jerald 
//           <br /> 
//           Labalan
//         </h1>
//         <h2>Frontend Developer</h2>
//         <span>
//           <a href="https://x.com/LabalanJerald" target='_blank'>
//           <img src={twitterIcon} alt="Twitter icon" />
//           </a>
//           <a href="https://github.com/jeraldlabalan" target='_blank'>
//           <img src={githubIcon} alt="Github icon" />
//           </a>
//           <a href="https://www.linkedin.com/in/jerald-labalan-91b320173/" target='_blank'>
//           <img src={linkedinIcon} alt="linkedin icon" />
//           </a>
//         </span>
//         <p className={styles.description}>With a passion for developing modern React web applications for commercial and businesses.</p>
//         <a href={cv} download>
//           <button className='hover'>
//             Resume
//           </button>
//         </a>
//       </div>
//     </section>
//   )
// };

// export default Hero;

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