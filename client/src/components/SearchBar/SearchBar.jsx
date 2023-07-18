//Dependencias
import React, {useState} from 'react'
//Estilos
import styles from './SearchBar.module.css'
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"

const SearchBar = ({setFoundDogs, setFound,  setInputCleared, setSearchResults}) => {

  const [input, setInput] = useState('')

  const [active, setActive] = useState(false)

  const searchClick = () => {
    setActive(true)
    console.log(active)
  }

  const closeSearch = () => {
    setActive(false)
    setInputCleared(true)
    console.log(active)
  }

  const handleChange = e => {
    setInput(e.target.value)
    setInputCleared(e.target.value === '');
  }

  const clickSearch = async(e) => {
    e.preventDefault()
    if(!input){
      alert('Debes introducir el nombre de un perro')
    } else {
      const data = await fetch(`http://localhost:3001/dogs/name?name=${input}`)
      const dataJson = await data.json()
  
      console.log(dataJson)
      // if(dataJson.length>0){
        setFoundDogs(dataJson)
        setFound(true)
      //}
      setSearchResults(input)
      setInputCleared(e.target.value === '');
      // setInput('')
    }
  }

  return (
    <form onSubmit={clickSearch}>
      <div className={styles.search}>
        <span className={styles.icon}>
          <AiOutlineSearch onClick={searchClick} className={styles.searchBtn}/> 
          <AiOutlineClose onClick={closeSearch} className={styles.closeBtn}/>
        </span>
      </div>
      <div className={active ? styles['searchBoxActive'] : styles['searchBox']}>
        <input type='text' className={styles.input} placeholder='Raza de perro...' onChange={handleChange} value={input}/> 
      </div>
      {/* <button type='submit' disabled={input.length===0}>Search
      </button> */}
    </form>
  )
}

export default SearchBar