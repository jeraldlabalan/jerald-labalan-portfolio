
import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
  <section id='projects' className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard 
       src={viberr} // photo imported above
       link={"https://gerlyntan07.github.io/codev/?fbclid=IwY2xjawGBF0NleHRuA2FlbQIxMAABHYUmEdQFH6Gw8L0agxbI2YHKzWVG8tGpIRlFDIRQUvKXHXSoIxmsA4qWrg_aem_BbQTNvXclUWh96guonh0qQ"}
       h3="IT Company"
       p="codev"
      />

      <ProjectCard 
       src={freshBurger} // photo imported above
       link={"https://gerlyntan07.github.io/group1_cvsuwebsite/?fbclid=IwY2xjawGBJSxleHRuA2FlbQIxMAABHUy7EFlob55s7QbDYqaHH49VT9MUBrkEJ7Wl3kSRLMIfPcXvSqzxJzhyZQ_aem_dSkWZGOr76rFexOsiHtx4A"}
       h3="Campus Website"
       p="CvSU - Bacoor City Campus"
      />
    </div>
  </section>
  );
}

export default Projects