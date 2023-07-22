//Dependencias
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
//Components
import Navbar from '../../Navbar/Navbar'
//Estilos
import styles from './Detail.module.css'

const Detail = () => {

  const detailId = useParams().id

  const [characters, setCharacters] = useState([])

  const getDogs = async () => {
    const data = await fetch(`http://localhost:3001/dogs/${detailId}`)

    const dataJson = await data.json()
    setCharacters(dataJson)
  }

  useEffect(() => {
    getDogs()
  },[detailId])

  return (
    <div className={styles.main}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      {/* {console.log(characters.breeds)}
      <h1>{characters.breeds !== undefined ? characters.breeds[0].name : characters.Nombre}</h1>
      <div>Id: {characters.breeds !== undefined ? characters.breeds[0].id : characters.ID}</div>
			<img src={characters.url || characters.Imagen} alt={characters.breeds !== undefined ? characters.breeds[0].name  : characters.Nombre} />
			<div>Altura: {characters.breeds !== undefined ? characters.breeds[0].height.imperial : characters.Altura}</div>
			<div>Peso: {characters.breeds !== undefined ? characters.breeds[0].weight.imperial : characters.Peso}</div>
			<div>Temperamentos: {characters.breeds !== undefined ? characters.breeds[0].temperament : characters.Temperamentos}</div>
			<div>Años de vida: {characters.breeds !== undefined ? characters.breeds[0].life_span : characters.Años_de_vida}</div> */}
      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.left}>
          <div className={styles.mainImage}>
            {/* <img src="image/p1.jpg" class="slide" /> */}
            <img src={characters.url || characters.Imagen} alt={characters.breeds !== undefined ? characters.breeds[0].name  : characters.Nombre} className={styles.slide}/>
          </div>
        </div>
        <div className={styles.right}>
          <h3>{characters.breeds !== undefined ? characters.breeds[0].name : characters.Nombre}</h3>
          <h4>Id: {characters.breeds !== undefined ? characters.breeds[0].id : characters.ID}</h4>
          <p className={styles.height}>Altura: {characters.breeds !== undefined ? characters.breeds[0].height.imperial : characters.Altura}</p>
          <p className={styles.weight}>Peso: {characters.breeds !== undefined ? characters.breeds[0].weight.imperial : characters.Peso}</p>
          <h5>Temperamentos: {characters.breeds !== undefined ? characters.breeds[0].temperament : characters.Temperamentos}</h5>
          <h5>Años de vida: {characters.breeds !== undefined ? characters.breeds[0].life_span : characters.Años_de_vida}</h5>
        </div>
      </div>
    </div>
  )
}

export default Detail