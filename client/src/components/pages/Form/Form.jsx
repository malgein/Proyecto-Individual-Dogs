//Dependencias
import React,{useState} from 'react'
//Components
import Navbar from '../../Navbar/Navbar'
//Estilos
import styles from './Form.module.css'

const Form = () => {

  

	// const [weightAndHeight, setWeightAndHeight] = useState({
	// 	minWeight: '',
	// 	maxWeight: '',
	// 	minHeight: '',
	// 	maxHeight: ''
	// })

	const [newDog, setNewDog] = useState({
		// Imagen: '',
		// Nombre: '',
		// Altura: '',
		// Peso : '',
		// Años_de_vida: ''
		//temperaments: []
		image: '',
		name: '',
		minHeight: '',
		maxHeight: '',
		minWeight: '',
		maxWeight: '',
		yearsOfLife: '',

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
		// setNewDog({ ...newDog, Peso: `${weightAndHeight.minWeight} - ${weightAndHeight.maxWeight}`, Altura: `${weightAndHeight.minHeight} - ${weightAndHeight.maxHeight}`, [e.target.name]: e.target.value  })
		setNewDog({...newDog, [e.target.name]: e.target.value })
	}

	// const handleTemperamentChange = (e) => {
  //   const temperamentSelected = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setNewDog({ ...newDog, temperaments: temperamentSelected });
  // };

	// const handleWeightAndHeight = e => {
	// 	setWeightAndHeight({...weightAndHeight, [e.target.name]: e.target.value})
		//console.log(weightAndHeight)
	//}

	const handleSubmit = async(e) => {
		e.preventDefault();
		let dataDog = {
			Imagen: newDog.image,
			Nombre: newDog.name,
			Altura: `${newDog.minHeight} - ${newDog.maxHeight}`,
			Peso: `${newDog.minWeight} - ${newDog.maxWeight}`,
			Años_de_vida: newDog.yearsOfLife
		}
		
		// setNewDog({...newDog, Peso: `${weightAndHeight.minWeight} - ${weightAndHeight.maxWeight}`, Altura: `${weightAndHeight.minHeight} - ${weightAndHeight.maxHeight}`})
		console.log(dataDog)
    try {
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
					yearsOfLife: '',
        });
      } else {
        console.error('Error al crear el perro');
				alert('Error al crear el perro')
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
				<label>Imagen del perro</label>
				<input type='text' name='image' value={newDog.image} onChange={handleChange}/>
        <label>Altura del perro</label>
				{/* <input type='text' name='Altura' value={newDog.Altura} onChange={handleChange}/> */}
        <h6>Altura maxima</h6>
        <input type='text' name='maxHeight' value={newDog.maxHeight}  onChange={handleChange}/>
        <h6>Altura minima</h6>
        <input type='text' value={newDog.minHeight} name='minHeight' onChange={handleChange}/>
				<label>Peso del perro</label>	
				{/* <input type='text' name='Peso' value={newDog.Peso} onChange={handleChange}/> */}
        <label>Peso maximo</label>
        <input type='text' name='maxWeight' value={newDog.maxWeight} onChange={handleChange}/>
        <label>Peso minimo</label>
        <input type='text'  name='minWeight' value={newDog.minWeight} onChange={handleChange}/>
        <label>Años de vida</label>
        <input type='text' value={newDog.yearsOfLife} name='yearsOfLife' onChange={handleChange}/>
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