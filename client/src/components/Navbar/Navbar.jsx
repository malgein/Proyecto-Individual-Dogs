//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//components
import SearchBar from '../SearchBar/SearchBar'
//Estilos
import styles from './Navbar.module.css'

const Navbar = ({setFoundDogs, setFound, setInputCleared, setSearchResults}) => {
  return (
    <div className={styles.main}>
      <Link to='/home'><button>Home</button></Link>
      <SearchBar setFound={setFound} setFoundDogs={setFoundDogs} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/>
      <Link to='/form'><button>Create Dog</button></Link>
    </div>
  )
}

export default Navbar