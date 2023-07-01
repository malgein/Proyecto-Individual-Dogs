//Dependencias
import React, {useState, useEffect} from 'react'
// import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
//Components
import SearchBar from '../../SearchBar/SearchBar'
// import Cards from '../../Cards/Cards'
import Card from '../../Card/Card'
//Redux
import {getAllDogs} from '../../../redux/actions.js'
//Estilos
import styles from './Home.module.css'

const Home = () => {

  const dispatch = useDispatch()

  const allDogs = useSelector((state) => state.allDogs)

  const itemsPerPage = 8

  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(allDogs.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage
  const currentDogs = allDogs.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllDogs())
  },[dispatch])

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    console.log(currentDogs)
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log(currentDogs)
  };

  return (
    <div className={styles.main}>
      <SearchBar />
      <h1>Dogs List</h1>
      {currentDogs.map((dog) => {
        return <Card key={dog.id} name={dog.name} image={dog.image} weight={dog.weight} temperament={dog.temperament} id={dog.id}/>
      })}
      {/* {currentDogs.map((dog) => (
        <div key={dog.id}>{dog.name}</div>
      ))} */}
      <div>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}



export default Home