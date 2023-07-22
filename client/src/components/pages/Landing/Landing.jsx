import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
//Estilos
import styles from './Landing.module.css'
import BgVideo from './SchwarmvonGoldenRetrieverWelpen.mp4'

const Landing = () => {

  return (
    <div className={styles.landingpage}>
            <video src={BgVideo} autoPlay muted loop className={styles.videoBg} />
            <div className={styles.bgOverlay}></div>
            {/* <div className="navbar">
                <div className="menu">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <div className={styles.homeText}>
                <h1>My Dogs App</h1>
                <p>let's pet them all</p>
            </div>
            <Link to='/home'><button className={styles.homeBtn}>Start</button></Link>
        </div>
    // <div>
    //    <section className={styles.banner}>
    //     <h1>My dogs app</h1>
    //     <video 
    //       autoplay muted
    //       ref={videoRef}
    //       src={BgVideo}
    //       type="video/mp4"
    //       onClick={handlePlayPause}
    //     />
    //     <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    //   </section>
    //   <Link to='/home'><button>Start</button> </Link>
    // </div>
  )
}

export default Landing