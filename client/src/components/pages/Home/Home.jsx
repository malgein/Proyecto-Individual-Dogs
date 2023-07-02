//Dependencias
import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
//Components
// import Cards from '../../Cards/Cards'
import Card from '../../Card/Card'
import Navbar from '../../Navbar/Navbar'
//Redux
import {getAllDogs} from '../../../redux/actions.js'
//Estilos
import styles from './Home.module.css'

const Home = () => {
  //contantes para uso de estados globales
  const dispatch = useDispatch()

  const allDogs = useSelector((state) => state.allDogs)

  //Estados locales
  const [foundDogs, setFoundDogs] = useState([])

  const [currentPage, setCurrentPage] = useState(1)

  const [found, setFound] = useState(false)

  const [inputCleared, setInputCleared] = useState(false)

  const [searchResults, setSearchResults] = useState('')
  //Logica para pasar paginas y mostrar 8 perros por vistas
  const itemsPerPage = 8

  const totalPages = Math.ceil(allDogs.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage
  const currentDogs = allDogs.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllDogs())
  },[dispatch])

  useEffect(() => {
    if(!inputCleared){
      setFound(false)
    } else{
      setFound(false)
    }
  }, [inputCleared]);  

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    console.log(currentDogs)
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log(currentDogs)
  };

  return (
    <div className={styles.main}  >
      <Navbar setFoundDogs={setFoundDogs} setFound={setFound} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/>
      <h1>Dogs List</h1>
      {!found ? 
        ( 
        <div key={crypto.randomUUID()}>
          {currentDogs.map((dog) => {
           return <Card key={dog.id} name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament} id={dog.id}/>
          })}
          <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          >
          Previous
          </button>
          <div>Pagina {currentPage} de  {totalPages}</div>
          <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          >
          Next
          </button>
        </div>
        ):
        (
          <div>
          {
            foundDogs.length===0 ? (<h2>No se encontraron resultados para {searchResults}</h2>) :
            (foundDogs.map(dog => {
              return (
                <div  key={crypto.randomUUID()}>
                  <h2>Resultados de {searchResults}</h2>
                  <Card key={dog.id} name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament} id={dog.id}/>
                </div>
               )
            }))
          }
        </div>
        )} 

    </div>
  )
}



export default Home