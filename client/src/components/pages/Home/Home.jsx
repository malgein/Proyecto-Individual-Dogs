//Dependencias
import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
//Components
import Card from '../../Card/Card'
import Navbar from '../../Navbar/Navbar'
//Redux
import {getAllDogs, getTemperaments, filterByTemperament, filterByOrigin, orderByName, orderByWeight} from '../../../redux/actions.js'
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

  const [currentIndex, setCurrentIndex] = useState(1);

  const [indexFilter , setIndexFilter] = useState(1)

  // Dividir el array foundDogs en grupos de 8 perros
  const dogsPerPage = 8;
  const totalGroups = Math.ceil(foundDogs.length / dogsPerPage);
  const startIndexFound = (currentIndex - 1) * dogsPerPage
  const endIndexFound = startIndexFound + dogsPerPage
  const dogsToShow = foundDogs.slice(startIndexFound, endIndexFound);

  // Función para mostrar el siguiente grupo de perros
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Función para mostrar el grupo anterior de perros
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  //Logica para pasar paginas y mostrar 8 perros por vistas
  const itemsPerPage = 8

  const totalPages = Math.ceil(allDogs.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage;

  const endIndex = startIndex + itemsPerPage
  //let classifiedDogs = [...allDogs]
  const apiDogs = allDogs.slice(startIndex, endIndex);

  
  
  const filterPerPage = 8

  const filterTotalPages = Math.ceil(dogsFiltered.length / filterPerPage)

  const startIndexFilter = (indexFilter - 1) * filterPerPage;

  const endIndexFilter = startIndexFilter + filterPerPage
  //let classifiedDogs = [...allDogs]
  const resultDogsFiltered = dogsFiltered.slice(startIndexFilter, endIndexFilter);

  const filterPreviousPage = () => {
    setIndexFilter((prevPage) => prevPage - 1);
    
  };

  const filterNextPage = () => {
    setIndexFilter((prevPage) => prevPage + 1);
    
  };
  
  
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

  const handleFilterTemp =  e => {
    dispatch(filterByTemperament(e.target.value))
    setIndexFilter(1)
    //console.log(dogsFiltered)
  }

  const handleOrigin = e => {
    // console.log(e.target.value)
    dispatch(filterByOrigin(e.target.value))
    // console.log(dogsFiltered)
  }

  const handleWords = e => {
    dispatch(orderByName(e.target.value))
    console.log(dogsFiltered)
  }

  const handleWeight = e => {
    // console.log(e.target.value)
    dispatch(orderByWeight(e.target.value))
    // console.log(dogsFiltered)
  }

  return (
    <div className={styles.main} >
      <Navbar setFoundDogs={setFoundDogs} setFound={setFound} setInputCleared={setInputCleared} setSearchResults={setSearchResults}/>
      <h1>Dogs List</h1>
      {
        !found && (
          <div className={styles.filters}>
            <div className={styles.filterSelect}>
              <h5>Ordenar por temperamento</h5>
              <select multiple onChange={handleFilterTemp}>
                <option value='Todos'>Todos</option>
                {allTemperaments?.map(temperaments =>  <option value={temperaments.Nombre} key={temperaments.ID}>{temperaments.Nombre}</option>)}
              </select>
            </div>
            <div className={styles.filterSelect}>
              <h5>Filtrar por Origen</h5>
              <select multiple onChange={handleOrigin}>
                <option value='object'>Todos</option>
                <option value='string'>Mis perros</option>
                <option value='number'>Perros de la API</option>
              </select>
            </div>
            <div className={styles.filterSelect}>
              <h5>Ordenar alfabeticamente</h5>
              <select multiple onChange={handleWords}>
                <option value='defecto'>Defecto</option>
                <option value='ascendente'>A - Z</option>
                <option value='descendente'>Z - A</option>
              </select>
            </div>
            <div className={styles.filterSelect}>
              <h5>Ordenar por peso</h5>
              <select multiple onChange={handleWeight}>
                <option value='defecto'>Defecto</option>
                <option value='ascendente'>Ascendente</option>
                <option value='descendente'>Descendente</option>
              </select>
            </div>
          </div>
        )
      }
      {/* {console.log(allDogs)} */}
      {!found && dogsFiltered.length===0 &&
        ( 
        <div key={crypto.randomUUID()} className={styles.card}>
          <div className={styles.cardHome}>
            {apiDogs.map((dog) => {
            return (
                <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament || dog.Temperamentos} id={dog.id || dog.ID} />
                ) 
            })}
          </div>
          <div className={styles.containerPages}>
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
        </div>
        )
      }
      {found && dogsFiltered.length===0 &&
        (
          <div key={crypto.randomUUID()} >
            {
              foundDogs.length===0 ? (<h2 className={styles.resultadosInfo}>No se encontraron resultados para {searchResults}</h2>) :
              (
                <div className={styles.card}>
                  <h2 className={styles.resultadosInfo}>Se muestran resultados de {searchResults}</h2>
                  <div  key={crypto.randomUUID()} className={styles.cardHome}>
                    { 
                      dogsToShow.map(dog => {
                        return (
                          <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament} id={dog.id || dog.ID}/>
                        )
                      })
                    }
                  </div>
                    <div className={styles.containerPages}>
                      <button onClick={handlePrevious} disabled={currentIndex === 1}>
                        Anterior
                      </button>
                      <div>Pagina {currentIndex} de  {totalGroups}</div>
                      <button onClick={handleNext} disabled={currentIndex === totalGroups }>
                        Siguiente
                      </button>
                    </div>
                </div>
              )
            }
          </div>
        )
      }
      {
        !found && dogsFiltered.length>=1 &&
        (
          <div key={crypto.randomUUID()} className={styles.card}>
            <div key={crypto.randomUUID()} className={styles.cardHome}>
              {
                resultDogsFiltered.map(dog =>{
                  return(
                    <Card key={dog.id || dog.ID} name={dog.name || dog.Nombre} image={dog.image || dog.Imagen} weight={dog.weight || dog.Peso} temperament={dog.temperament || dog.Temperamentos} id={dog.id || dog.ID}/>
                  )
                })
              }
            </div> 
            <div className={styles.containerPages}>
                      <button onClick={filterPreviousPage} disabled={indexFilter === 1}>
                        Anterior
                      </button>
                      <div>Pagina {indexFilter} de  {filterTotalPages}</div>
                      <button onClick={filterNextPage} disabled={indexFilter === filterTotalPages }>
                        Siguiente
                      </button>
                    </div>
          </div>
        )
      } 
    </div>
  )
}

export default Home


