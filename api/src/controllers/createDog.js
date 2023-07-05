const {Dog} = require('../db')

const createDog = async (req, res) => {
  const { Imagen, Nombre, Altura, Peso, Años_de_vida } = req.body;

  try {

    if(Imagen && Nombre && Altura && Peso && Años_de_vida){
      const dog = await Dog.create({
        Imagen,
        Nombre,
        Altura,
        Peso,
        Años_de_vida,
      });
      console.log(dog)
      res.status(201).json(dog);
    } else {
      res.status(400).send('Todos los campos son obligatorios')
    }
  
		
  } catch (error) {
    console.error('Error al crear el perro:', error. message);
    res.status(500).send('Ocurrió un error al crear el perro');
  }
};

module.exports = createDog 