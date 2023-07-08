import React from 'react'
//Estilos
import styles from './Card.module.css'


const Card = ({image, name, weight, temperament, id}) => {
  return (
    <div className={styles.main}>
      <img src={image.url || image } alt={name} />
      <div>
        <h4>Nombre: {name}</h4>
        <p># {id}</p>
        <p>Temperamentos: {temperament}</p>
        <p>Peso: {weight.imperial || weight}</p>
      </div>
    </div>
  )
}

export default Card