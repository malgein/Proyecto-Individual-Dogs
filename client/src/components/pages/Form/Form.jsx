//Dependencias
import React,{useState} from 'react'
//Components
import Navbar from '../../Navbar/Navbar'
import { validations } from './validations'
//Estilos
import styles from './Form.module.css'

const Form = () => {

	//Estados locales
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

	// const handleTemperamentChange = (e) => {
  //   const { value, checked } = e.target;
  //   let updatedTemperaments;

  //   if (checked) {
  //     updatedTemperaments = [...newDog.temperaments, value];
  //   } else {
  //     updatedTemperaments = newDog.temperaments.filter((temperament) => temperament !== value);
  //   }

  //   setNewDog({ ...newDog, temperaments: updatedTemperaments });
  // };

	const handleChange = e => {
		setErrors(validations({...newDog, [e.target.name]: e.target.value}))
		setNewDog({...newDog, [e.target.name]: e.target.value })

		console.log(newDog)
		console.log(errors)
	}

	// const handleTemperamentChange = (e) => {
  //   const temperamentSelected = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setNewDog({ ...newDog, temperaments: temperamentSelected });
  // };

	const handleSubmit = async(e) => {
		e.preventDefault();
		let dataDog = {
			Imagen: newDog.image,
			Nombre: newDog.name,
			Altura: `${newDog.minHeight} - ${newDog.maxHeight}`,
			Peso: `${newDog.minWeight} - ${newDog.maxWeight}`,
			Años_de_vida: newDog.yearsOfLife
		}
		
		console.log(dataDog)
    try {
			if(!errors.image && !errors.name && !errors.minHeight && !errors.maxHeight && !errors.minWeight && !errors.maxWeight && !errors.yearsOfLife){
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
	}

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Form</h1>
        <label>Nombre del perro</label>
        <input name='name' type='text' value={newDog.name} onChange={handleChange}/>
				{errors.name && <p>{errors.name}</p>}
				<label>Imagen del perro</label>
				<input type='text' name='image' value={newDog.image} onChange={handleChange}/>
				{errors.image && <p>{errors.image}</p>}
        <label>Altura del perro</label>
        <h6>Altura maxima</h6>
        <input type='number' name='maxHeight' value={newDog.maxHeight}  onChange={handleChange}/>
				{errors.maxHeight && <p>{errors.maxHeight}</p>}
        <h6>Altura minima</h6>
        <input type='number' value={newDog.minHeight} name='minHeight' onChange={handleChange}/>
				{errors.minHeight && <p>{errors.minHeight}</p>}
				<label>Peso del perro</label>	
        <label>Peso maximo</label>
        <input type='number' name='maxWeight' value={newDog.maxWeight} onChange={handleChange}/>
				{errors.maxWeight && <p>{errors.maxWeight}</p>}
        <label>Peso minimo</label>
        <input type='number'  name='minWeight' value={newDog.minWeight} onChange={handleChange}/>
				{errors.minWeight && <p>{errors.minWeight}</p>}
        <label>Años de vida</label>
        <input type='number' value={newDog.yearsOfLife} name='yearsOfLife' onChange={handleChange}/>
				{errors.yearsOfLife && <p>{errors.yearsOfLife}</p>}
        {/* <label>Temperamentos</label> */}
        {/* <select multiple
          id="temperaments"
          value={newDog.temperaments}
          onChange={handleTemperamentChange}>
						<option value="Curious">Curioso</option>
						<option value="Playful">Jugeton</option>
						<option value="Happy">Feliz</option>
						<option value="Friendly">Amigable</option>
					</select> */}
				{/* <div>
          <input
            type="checkbox"
            id="playful"
            name="playful"
            value="Playful"
            checked={newDog.temperaments.includes('Playful')}
            onChange={handleTemperamentChange}
          />
          <label htmlFor="playful">Juguetón</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="happy"
            name="happy"
            value="Happy"
            checked={newDog.temperaments.includes('Happy')}
            onChange={handleTemperamentChange}
          />
          <label htmlFor="happy">Feliz</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="friendly"
            name="friendly"
            value="Friendly"
            checked={newDog.temperaments.includes('Friendly')}
            onChange={handleTemperamentChange}
          />
          <label htmlFor="friendly">Amigable</label>
        </div> */}
        <button type='submit'>Crear raza de Perro</button>
      </form>
    </div>
  )  
}

export default Form