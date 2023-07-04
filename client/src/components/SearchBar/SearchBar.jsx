//Dependencias
import React, {useState} from 'react'
//Estilos
import styles from './SearchBar.module.css'

const SearchBar = ({setFoundDogs, setFound,  setInputCleared, setSearchResults}) => {

  const [input, setInput] = useState('')

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
    <form className={styles.main} onSubmit={clickSearch}>
      <input type='text' placeholder='Raza de perro...' onChange={handleChange} value={input}/> 
      <button type='submit' disabled={input.length===0}>Search</button>
    </form>
  )
}

export default SearchBar