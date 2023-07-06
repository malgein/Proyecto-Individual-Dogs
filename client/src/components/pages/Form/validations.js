// export const validations = input =>{
// 	const errors = {}

// 	if(input.name===''){
// 		errors.name = 'El nombre del perro no debe estar vacio'
// 	}

// 	if(input.image===''){
// 		errors.image = 'Debes incluir la url de la imagen del perro'
// 	}

// 	if(input.maxHeight===''){
// 		errors.maxHeight = 'Debes incluir la altura maxima del perro'
// 	}

// 	if(Number(input.maxHeight)<0){
// 		errors.maxHeight = 'La altura maxima no puede ser menor a 0'
// 	}

// 	if(Number(input.maxHeight)===0){
// 		errors.maxHeight = 'La altura maxima no puede ser 0'
// 	}

// 	if(input.minHeight===''){
// 		errors.minHeight = 'Debes incluir la altura minima del perro'
// 	}

// 	if(Number(input.minHeight)<0){
// 		errors.minHeight = 'La altura minima no puede ser menor a 0'
// 	}

// 	if(Number(input.minHeight)===0){
// 		errors.minHeight = 'La altura minima no puede ser 0'
// 	}

// 	if(input.maxWeight===''){
// 		errors.maxWeight = 'Debes incluir el peso maximo del perro'
// 	}

// 	if(Number(input.maxWeight)<0){
// 		errors.maxWeight = 'El peso maximo no puede ser menor a 0'
// 	}

// 	if(Number(input.maxWeight)===0){
// 		errors.maxWeight = 'El peso maximo no puede ser 0'
// 	}

// 	if(input.minWeight===''){
// 		errors.minWeight = 'Debes incluir el peso minimo del perro'
// 	}

// 	if(Number(input.minWeight)<0){
// 		errors.minWeight = 'El peso minimo no puede ser  menor a 0'
// 	}

// 	if(Number(input.minWeight)===0){
// 		errors.minWeight = 'El peso maximo no puede ser 0'
// 	}

// 	if(Number(input.maxWeight) <= Number(input.minWeight)){
// 		errors.maxWeight = 'El peso maximo no puede ser igual o menor al peso minimo'
// 	}

// 	if(Number(input.maxHeight) <= Number(input.minHeight)){
// 		errors.maxHeight = 'La altura maxima no puede ser igual o menor a la altura minima'
// 	}

// 	if(input.yearsOfLife===''){
// 		errors.yearsOfLife = 'Debes incluir el promedio de años de vida del perro'
// 	}

// 	if(input.yearsOfLife<='0'){
// 		errors.yearsOfLife = 'Los años de vida del perro no pueden ser de 0 o menor'
// 	}



// 	return errors
// }


export const validations = (input) => {
  const errors = {};

  if (input.name === '') {
    errors.name = 'El nombre del perro no debe estar vacío';
  }

  if (input.image === '') {
    errors.image = 'Debes incluir la URL de la imagen del perro';
  }

  if (input.maxHeight === '') {
    errors.maxHeight = 'Debes incluir la altura máxima del perro';
  }

  if (input.minHeight === '') {
    errors.minHeight = 'Debes incluir la altura mínima del perro';
  }

  if (input.maxWeight === '') {
    errors.maxWeight = 'Debes incluir el peso máximo del perro';
  }

  if (input.minWeight === '') {
    errors.minWeight = 'Debes incluir el peso mínimo del perro';
  }

  if (input.yearsOfLife === '') {
    errors.yearsOfLife = 'Debes incluir el promedio de años de vida del perro';
  }

  if (input.maxHeight !== '' && Number(input.maxHeight) <= 0) {
    errors.maxHeight = 'La altura máxima no puede ser menor o igual a cero';
  }

  if (input.minHeight !== '' && Number(input.minHeight) <= 0) {
    errors.minHeight = 'La altura mínima no puede ser menor o igual a cero';
  }

  if (input.maxWeight !== '' && Number(input.maxWeight) <= 0) {
    errors.maxWeight = 'El peso máximo no puede ser menor o igual a cero';
  }

  if (input.minWeight !== '' && Number(input.minWeight) <= 0) {
    errors.minWeight = 'El peso mínimo no puede ser menor o igual a cero';
  }

  if (
    input.maxHeight !== '' &&
    input.minHeight !== '' &&
    Number(input.maxHeight) <= Number(input.minHeight)
  ) {
    errors.maxHeight = 'La altura máxima no puede ser menor o igual a la altura mínima';
  }

  if (
    input.maxWeight !== '' &&
    input.minWeight !== '' &&
    Number(input.maxWeight) <= Number(input.minWeight)
  ) {
    errors.maxWeight = 'El peso máximo no puede ser menor o igual al peso mínimo';
  }

  if (input.yearsOfLife !== '' && Number(input.yearsOfLife) <= 0) {
    errors.yearsOfLife = 'Los años de vida del perro no pueden ser iguales o menores a cero';
  }

  return errors;
};
