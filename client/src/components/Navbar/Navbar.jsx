//Dependencias
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
//components
import SearchBar from '../SearchBar/SearchBar'
//Estilos
import styles from './Navbar.module.css'



const Navbar = ({setFoundDogs, setFound, setInputCleared, setSearchResults}) => {

  const location = useLocation().pathname

  return (
    <header>
      <Link to='/' className={styles.logo}>Logo</Link>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <Link to='/home'><li>Home</li></Link>
          <Link to='/form'><li>Create Dog</li></Link>
          <Link to='/about'><li>About</li></Link>
        </ul>
      </div>
        {location!=='/form' ? (<SearchBar setFound={setFound} setFoundDogs={setFoundDogs} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/>) : (<></>)}
        {/* <SearchBar setFound={setFound} setFoundDogs={setFoundDogs} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/> */}
    </header>
  )
}

export default Navbar