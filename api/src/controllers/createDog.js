const {Dog, dogTemperament} = require('../db')

const createDog = async (req, res) => {
  const { Imagen, Nombre, Altura, Peso, Años_de_vida, temperamentoId} = req.body;

  try {

    if(Imagen && Nombre && Altura && Peso && Años_de_vida && temperamentoId){
      const dog = await Dog.create({
        Imagen,
        Nombre,
        Altura,
        Peso,
        Años_de_vida,
      });
      
      // await dogTemperament.create({
      //   DogID: dog.dataValues.ID,
      //   TemperamentID: temperamentoId,
      // });

      for (let i = 0; i < temperamentoId.length; i++) {
        await dogTemperament.create({
          DogID: dog.ID,
          TemperamentID: temperamentoId[i],
        });
      }

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