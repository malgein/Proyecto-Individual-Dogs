import React from 'react'
//Componentes
import Navbar from '../../Navbar/Navbar'
//Estilos
import styles from './About.module.css'
import Wilmer from './Wilmer.jpg'
import Sacha from './Imagen de sacha.jpeg'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiWebflow} from 'react-icons/si'
// import Bars from 'react-loader-spinner/Bars'


const About = () => {
  return (
    <div>
			<Navbar />
			{/* <Bars
  height="80"
  width="80"
  color="#3e2b1d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> */}
			<section className={styles.sectionWhite}>
				<div className={styles.container}>
					<div className={`${styles.colMd12} ${styles.textCenter}`}>
							<h2 className={styles.sectionTitle}>Hey I am Wilmer</h2>
							<p className={styles.sectionSubtitle}>{}</p>
					</div> 
					<div className={styles.row}>
						<div className={`${styles.colSm6} ${styles.colMd4}`}>
							<div className={styles.teamItem}>
								<img src={Wilmer} className={styles.teamImg} alt="pic" />                   
									<h3>Wilmer Pocaterra</h3>            
									<div className={styles.teamInfo}><p>Full-Stack Developer</p></div>
									<p>Wilmer es un desarrollador full stack graduado de uno los mejores bootcamp de toda Latinoamerica Henry, quien esta deseoso para su primer desafio en la industria tech y espera con ansias participar en un nuevo proyecto</p>
									<ul className={styles.teamIcon}>
										<li><a target="_blank" rel="noreferrer" href="https://github.com/malgein" className={styles.github}>
											<i className={styles.faFaTwitter}><AiFillGithub /></i>
										</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://631f51d68b9a9c0008b9c8e7--adorable-speculoos-f12490.netlify.app/" className={styles.web}>
											<i className={styles.web}><SiWebflow /></i>
										</a></li>
										<li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/wilmerpocaterra/" className={styles.linkedIn}>
											<i className={styles.faFaFacebook}><AiFillLinkedin /></i>
										</a></li>
										{/* <li><a href="#" className={styles.dribble}>
											<i className={styles.faFaDribbble}></i>
										</a></li> */}
									</ul>
							</div>
						</div> 
						<div className={`${styles.colSm6} ${styles.colMd4}`}>
							<div className={styles.teamItem}>
							<img src={Sacha} className={styles.teamImg} alt="pic" />
							<h3>Sacha</h3> 
							<div class={styles.teamInfo}><p>My dog</p></div>
								<p>Mi fiel companera es una glotona de primera, le gusta que le soben la panzita, jugar a la pelota y los paseos diarios</p>
							</div>
						</div> 
					</div> 
				</div>
      </section>
	  </div>
  )
}

export default About