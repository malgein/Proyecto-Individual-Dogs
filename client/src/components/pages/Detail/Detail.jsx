//Dependencias
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
//Components
import Navbar from '../../Navbar/Navbar'

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
    <div>
      <Navbar />
      {/* {console.log(characters.breeds)} */}
      <h1>{characters.breeds !== undefined ? characters.breeds[0].name : characters.Nombre}</h1>
      <div>Id: {characters.breeds !== undefined ? characters.breeds[0].id : characters.ID}</div>
			<img src={characters.url || characters.Imagen} alt={characters.breeds !== undefined ? characters.breeds[0].name  : characters.Nombre} />
			<div>Altura: {characters.breeds !== undefined ? characters.breeds[0].height.imperial : characters.Altura}</div>
			<div>Peso: {characters.breeds !== undefined ? characters.breeds[0].weight.imperial : characters.Peso}</div>
			<div>Temperamentos: {characters.breeds !== undefined ? characters.breeds[0].temperament : characters.Temperamentos}</div>
			<div>Años de vida: {characters.breeds !== undefined ? characters.breeds[0].life_span : characters.Años_de_vida}</div>
    </div>
  )
}

export default Detail