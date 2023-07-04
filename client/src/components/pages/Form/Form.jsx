//Dependencias
import React,{useState} from 'react'
//Components
import Navbar from '../../Navbar/Navbar'

const Form = () => {

  const [newDog, setNewDog] = useState({
		name: '',
		maxHeight: '',
		minHeight: '',
		maxWeight:'',
		minWeight: '',
		yearsOfLife: '',
		temperaments: []
	})

	const handleTemperamentChange = (e) => {
    const { value, checked } = e.target;
    let updatedTemperaments;

    if (checked) {
      updatedTemperaments = [...newDog.temperaments, value];
    } else {
      updatedTemperaments = newDog.temperaments.filter((temperament) => temperament !== value);
    }

    setNewDog({ ...newDog, temperaments: updatedTemperaments });
  };

	// const handleTemperamentChange = (e) => {
  //   const temperamentSelected = Array.from(e.target.selectedOptions, (option) => option.value);
  //   setNewDog({ ...newDog, temperaments: temperamentSelected });
  // };

	const handleSubmit = async(e) => {
		e.preventDefault()
		console.log(newDog)
	}

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <label>Nombre del perro</label>
        <input name='name' type='text' value={newDog.name}/>
        <label>Altura del perro</label>
        <h6>Altura maxima</h6>
        <input type='number' name='maxHeight' value={newDog.maxHeight} />
        <h6>Altura minima</h6>
        <input type='number' value={newDog.minHeight} name='minHeight'/>
				<label>Peso del perro</label>
        <label>Peso maximo</label>
        <input type='number' name='maxHeight' value={newDog.maxWeight} />
        <label>Peso minimo</label>
        <input type='number' value={newDog.minWeight} name='minHeight'/>
        <label>Años de vida</label>
        <input type='text' value={newDog.maxHeight}/>
        <label>Temperamentos</label>
        {/* <select multiple
          id="temperaments"
          value={newDog.temperaments}
          onChange={handleTemperamentChange}>
						<option value="Curious">Curioso</option>
						<option value="Playful">Jugeton</option>
						<option value="Happy">Feliz</option>
						<option value="Friendly">Amigable</option>
					</select> */}
				<div>
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
        </div>
        <button type='submit'>Crear raza de Perro</button>
      </form>
    </div>
  )  
}

export default Form