//Dependencias
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
//components
import SearchBar from '../SearchBar/SearchBar'
//Estilos
import styles from './Navbar.module.css'
import {AiOutlineMenuFold} from "react-icons/ai"
import {AiOutlineMenuUnfold} from "react-icons/ai"

const Navbar = ({setFoundDogs, setFound, setInputCleared, setSearchResults}) => {

  const location = useLocation().pathname

  const [menuToggle, setMenuToggle] = useState(false)

  const showMenuResponsive =() => {
    setMenuToggle(true)
    console.log(menuToggle)
  }

  const closeMenuResponsive = () => {
    setMenuToggle(false)
  }

  return (
    <header className={menuToggle ? styles.open : ''}>
      <Link to='/' className={styles.logo}>Logo</Link>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/form'><li>Create Dog</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </div>
      {!menuToggle ? <AiOutlineMenuFold className={styles.menuToggle} onClick={showMenuResponsive}/> : <AiOutlineMenuUnfold onClick={closeMenuResponsive} className={styles.closeBtn}/>}
      
      {/* <div className={styles.menuToggle}>
        <input type="checkbox" id="menu-check" />
        <div className={styles.menuBtn}>
          <label for="menu-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div> */}
      {location==='/home' ? (<SearchBar setFound={setFound} setFoundDogs={setFoundDogs} setInputCleared={setInputCleared} setSearchResults={setSearchResults} />) : (<></>)}
        {/* <SearchBar setFound={setFound} setFoundDogs={setFoundDogs} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/> */}
    </header>
  )
}

export default Navbar