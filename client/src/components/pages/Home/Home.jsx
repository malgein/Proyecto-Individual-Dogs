//Dependencias
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//Components
import Card from '../../Card/Card'
import Navbar from '../../Navbar/Navbar'
//Redux
import {getAllDogs, getTemperaments, filterByTemperament} from '../../../redux/actions.js'
//Estilos
import styles from './Home.module.css'

const Home = () => {
  //contantes para uso de estados globales
  const dispatch = useDispatch()

  const allDogs = useSelector((state) => state.allDogs)

  const allTemperaments = useSelector((state) => state.allTemperaments)

  const dogsFiltered = useSelector((state) => state.dogsFiltered)

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
  //let classifiedDogs = [...allDogs]
  const apiDogs = allDogs.slice(startIndex, endIndex);

  // const myDogs = allDogs.filter(dog => typeof dog.ID === 'string')

  //Trae al todos los perros de la BD y de la API
  useEffect(() => {
    dispatch(getAllDogs())
  },[dispatch])

  //Logra en parte que al limpiar el input de busqueda se borren los resultados de busqueda
  useEffect(() => {
    if(!inputCleared){
      setFound(false)
    } else{
      setFound(false)
    }
  }, [inputCleared]);  

  //Trae todos los temperamentos para poder establecerlos como opciones y valores  para un filtrado
  useEffect(() => {
    dispatch(getTemperaments())
  },[])

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    console.log(apiDogs)
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log(apiDogs)
  };

  // const filterByTemp = temperament =>{
  //   const classifiedDogs = [...allDogs]
  //   //console.log(classifiedDogs)
  //   const result = classifiedDogs.filter(elem => elem.temperament?.split(', ').includes(temperament))
  //   console.log(result)
  //   // setAux(!aux)
  // }

  const handleFilterTemp =  (e) => {
    // console.log(e.target.value)
    // console.log(allDogs)
    // setAux(!aux)
    // dispatch(filterByTemperament(e.target.value))
    // classifiedDogs = [...allDogs]
    dispatch(filterByTemperament(e.target.value))
    console.log(dogsFiltered)
  }

  return (
    <div className={styles.main} >
      <Navbar setFoundDogs={setFoundDogs} setFound={setFound} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/>
      <h1>Dogs List</h1>
      {
        !found && (
          <div>
             <h5>Filtrar por Temperamento</h5>
            <select multiple onChange={handleFilterTemp}>
            <option value='Todos'>Todos</option>
            {allTemperaments?.map(temperaments =>  <option value={temperaments.Nombre} key={temperaments.ID}>{temperaments.Nombre}</option>)}
            </select>
          </div>
        )
      }
      {/* {console.log(dogsFiltered)} */}
      {!found && dogsFiltered.length===0 &&
        ( 
        <div key={crypto.randomUUID()}>
          {apiDogs.map((dog) => {
           return <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament || dog.Temperamentos} id={dog.id || dog.ID}/>
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
        )
      }
      {found && dogsFiltered.length===0 &&
        (
          <div key={crypto.randomUUID()}>
            {//console.log(foundDogs)
              foundDogs.length===0 ? (<h2>No se encontraron resultados para {searchResults}</h2>) :
              (
                <div>
                  <h2>Se muestran resultados de {searchResults}</h2>
                  {
                    foundDogs.map(dog => {
                      return (
                        <div  key={crypto.randomUUID()}>
                          <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament} id={dog.id || dog.ID}/>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          </div>
        )
      }
      {!found && dogsFiltered.length>=1 &&
        (
          <div key={crypto.randomUUID()}>
            {
              dogsFiltered.map(dog =>{
                return(
                  <div key={crypto.randomUUID()}>
                     <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament} id={dog.id || dog.ID}/>
                  </div>
                )
              })
            }
          </div>
        )
      } 
    </div>
  )
}



export default Home