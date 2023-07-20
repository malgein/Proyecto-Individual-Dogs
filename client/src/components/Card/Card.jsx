//Dependencias
import React from 'react'
import { Link } from 'react-router-dom'
//Estilos
import styles from './Card.module.css'


const Card = ({image, name, weight, temperament, id}) => {
  return (
    // <Link to={image.id!==undefined ? `/detail/${image.id}` : `/detail/${id}`} className={styles.link}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imgBx}>
            <img src={image.url || image } alt={name} />
          </div>
          <div className={styles.content}>
            <h2>{name}</h2>
            <p>Temperamentos: {temperament}</p>
            <p>Peso: {weight.imperial || weight}</p>
            <Link to={image.id!==undefined ? `/detail/${image.id}` : `/detail/${id}`} className={styles.link}>
              Details
            </Link>
          </div>
        </div>
        {/* <img src={image.url || image } alt={name} />
        <div>
          <h4>Nombre: {name}</h4>
          <p># {id}</p>
          <p>Temperamentos: {temperament}</p>
          <p>Peso: {weight.imperial || weight}</p>
        </div> */}
      </div>
  )
}
//`/detail/${image.id}` || `/detail/${id}`
export default Card