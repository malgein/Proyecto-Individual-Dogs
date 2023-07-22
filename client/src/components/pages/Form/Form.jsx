//Dependencias
import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
//Redux
import {getTemperaments} from '../../../redux/actions'
//Components
import Navbar from '../../Navbar/Navbar'
import { validations} from './validations'
//Estilos
import styles from './Form.module.css'

const Form = () => {

	//*Estados globales
	const dispatch = useDispatch()

	const allTemperaments = useSelector((state) => state.allTemperaments)
	//*Estados locales
	const [newDog, setNewDog] = useState({
		image: '',
		name: '',
		minHeight: '',
		maxHeight: '',
		minWeight: '',
		maxWeight: '',
		yearsOfLife: ''
	})

	const [errors, setErrors] = useState({
		image: '',
		name: '',
		maxHeight:'',
		minHeight: '',
		maxWeight: '',
		minWeight: '',
		yearsOfLife: ''
	})

	const [selectedTemperaments, setSelectedTemperaments] = useState([])

	// let checkboxes = []

	// const createTemperaments = async() => {
	// 	const response = await axios.get('http://localhost:3001/temperaments')

	// 	const data = response.data
	// 	checkboxes = [...data]
		
	// }
	// console.log(checkboxes)
	//*Creacion de todos los temperamentos disponibles cons sus repectivos ID
	useEffect(() => {
		// createTemperaments()
		dispatch(getTemperaments())
	},[])
	//*Manejador de temperamentos: obtiene los ids de los temperamentos a los cuales se asociara el perro recien creado y los guarda en un estado
	const handleTemperamentChange = (event) => {

		const { value, checked } = event.target;
		//console.log(value)
    if (checked) {
      // Agregar el temperamento al estado
      const [name, id] = value.split('_');
      setSelectedTemperaments([...selectedTemperaments, { name, id }]);
    } else {
      // Eliminar el temperamento del estado
			const [name, id] = value.split('_')
      const updatedTemperamentos = selectedTemperaments.filter(
        (temperamento) => temperamento.name !== name && temperamento.id !==id
      );
      setSelectedTemperaments(updatedTemperamentos);
    }

		//console.log(selectedTemperaments)

		// const temperament = e.target.value
		// const isChecked = e.target.checked
		
		// console.log(temperament)
		// if(isChecked){
		// 	setSelectedTemperaments({...selectedTemperaments, ID: temperament[0], Nombre: temperament[1]})
		// }	else {
		// 	const updateTemperaments = selectedTemperaments.filter(
		// 		(elem) => elem !== temperament[0] || elem!== temperament[1]
		// 	)
		// 	setSelectedTemperaments(updateTemperaments)
		// }

		// console.log(selectedTemperaments)
		// setErrorsTemperament(validationTemperament(selectedTemperaments, isChecked))
		// console.log(errorsTemperament)
		//console.log(selectedTemperaments)
    // const { value, checked } = e.target;
    // let updatedTemperaments;

    // if (checked) {
    //   updatedTemperaments = [...newDog.temperaments, value];
    // } else {
    //   updatedTemperaments = newDog.temperaments.filter((temperament) => temperament !== value);
    // }

    // setNewDog({ ...newDog, temperaments: updatedTemperaments });
  };

	const handleChange = e => {
		setErrors(validations({...newDog, [e.target.name]: e.target.value}))
		setNewDog({...newDog, [e.target.name]: e.target.value })

		//console.log(newDog)
		//console.log(errors)
	}

	// const handleTemperamentChange = (e) => {
  //   const temperamentSelected = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setNewDog({ ...newDog, temperaments: temperamentSelected });
  // };
	//Funcion que crea el perro en el modelo dogs tomando como informacion para crearlo lo introducido en los inputs y los ids de lostemperamentos a los cuales se relacionara en la base de datos
	const handleSubmit = async(e) => {
		e.preventDefault();
		console.log(selectedTemperaments)

		const temperaments = selectedTemperaments.map(temperament => temperament.name).join(', ')

		const idTemperaments = selectedTemperaments.map(temperamentsId => temperamentsId.id)

		let dataDog = {
			Imagen: newDog.image,
			Nombre: newDog.name,
			Altura: `${newDog.minHeight} - ${newDog.maxHeight}`,
			Peso: `${newDog.minWeight} - ${newDog.maxWeight}`,
			Años_de_vida: newDog.yearsOfLife,
			Temperamentos: temperaments,
			temperamentoId: idTemperaments
		}
		
    try {
			if(!errors.image && !errors.name && !errors.minHeight && !errors.maxHeight && !errors.minWeight && !errors.maxWeight && !errors.yearsOfLife && selectedTemperaments.length>0){
				const response = await fetch('http://localhost:3001/dogs', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(dataDog),
      	});

      	if (response.ok) {
					console.log('Perro creado exitosamente');
					alert('Perro creado exitosamente');
					setNewDog({
						image: '',
						name: '',
						minHeight: '',
						maxHeight: '',
						minWeight: '',
						maxWeight: '',
						yearsOfLife: ''
        	});
					setSelectedTemperaments([])
      	} else {
					console.error('Error al crear el perro');
					alert('Error al crear el perro')
      	}
			}	else{
				alert('Debes solucionar los errores antes de crear tu perro')
			}
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
			alert('Error en la solicitud:', error.message)
    }
		console.log(dataDog)
	}

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Crea tu propio perro</h1>
			<div className={styles.content}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.dogDetails}>
						<div className={styles.inputBox}>
							<span className={styles.details}>Nombre del perro</span>
							<input name='name' type='text' value={newDog.name} onChange={handleChange} placeholder='Introduce el nombre del perro' className={errors.name ? styles.warning : ''}/>
							{errors.name && <p className={styles.error}>{errors.name}</p>}
						</div>
						<div className={styles.inputBox}>
							<span className={styles.details}>Url de la imagen</span>
							<input type='text' name='image' value={newDog.image} onChange={handleChange} placeholder='url de la imagen del perro' className={errors.image && styles.warning}/>
							{errors.image && <p className={styles.error}>{errors.image}</p>}
						</div>
						<div className={styles.inputBox}>
							{/* <span className={styles.details}>Altura del perro</span> */}
							<span className={styles.details}>Altura maxima</span>
							<input type='number' name='maxHeight' value={newDog.maxHeight}  onChange={handleChange} placeholder='Introduce la altura maxima' className={errors.maxHeight && styles.warning}/>
							{errors.maxHeight && <p className={styles.error}>{errors.maxHeight}</p>}
						</div>
						<div className={styles.inputBox}>
							<span className={styles.details}>Altura minima</span>
							<input type='number' value={newDog.minHeight} name='minHeight' onChange={handleChange} className={errors.minHeight && styles.warning} placeholder='Ingresa la altura minima'/>
							{errors.minHeight && <p className={styles.error}>{errors.minHeight}</p>}
						</div>
						<div className={styles.inputBox}>
							{/* <span className={styles.details}>Peso del perro</span> */}
							<span className={styles.details}>Peso maximo</span>
							<input type='number' name='maxWeight' value={newDog.maxWeight} onChange={handleChange} className={errors.maxWeight && styles.warning} placeholder='Ingresa el peso maximo'/>
							{errors.maxWeight && <p className={styles.error}>{errors.maxWeight}</p>}
							<span className={styles.details}>Peso minimo</span>
							<input type='number'  name='minWeight' value={newDog.minWeight} onChange={handleChange} className={errors.minWeight && styles.warning} placeholder='Ingresa el peso minimo'/>
							{errors.minWeight && <p className={styles.error}>{errors.minWeight}</p>}
						</div>
						<div className={styles.inputBox}>
							<span className={styles.details}>Años de vida</span>
							<input type='number' value={newDog.yearsOfLife} name='yearsOfLife' onChange={handleChange} className={errors.yearsOfLife && styles.warning} placeholder='Ingresa los años de vida'/>
							{errors.yearsOfLife && <p className={styles.error}>{errors.yearsOfLife}</p>}
						</div>
					</div>
					<div className={styles.temperamentDetails}>
						{/* {console.log(allTemperaments)} */}
						{selectedTemperaments.length===0 && <p className={styles.error}>Debes selecionar al menos 1 temperamento</p>}
						{allTemperaments?.map(temperament => {
							return(
							<div key={temperament.ID} className={styles.category}>
								<input
									type="checkbox"
									id={temperament.ID}
									name={temperament.Nombre}
									value={`${temperament.Nombre}_${temperament.ID}`}
									onChange={handleTemperamentChange}
									//checked={newDog.temperaments.includes('Playful')}
								/>
								<label htmlFor={temperament.Nombre}>{temperament.Nombre}</label>
							</div>
							)
						})}
					</div>
					<div className={styles.button}>
						<input type='submit' value='Crear Perro' disabled={!errors}/>
					</div>
				</form>
			</div>
    </div>
  )  
}

export default Form