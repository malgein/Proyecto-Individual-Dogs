const axios = require('axios');
const { Temperament } = require('../db'); // Asumiendo que tienes un modelo Temperament definido

const fetchTemperaments = async (req, res) => {
  
    try {
      const temperamentSaved = await Temperament.findAll()
      if(temperamentSaved.length===0){
        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const breeds = response.data;
        
        const allTemperaments = [];
    
        breeds.forEach((breed) => {
          const { temperament } = breed;
          if (temperament) {
            const temperamentArr = temperament.split(',').map((temp) => temp.trim());
            allTemperaments.push(...temperamentArr);
          }
        });
        
        // Eliminar duplicados
        const uniqueTemperaments = [...new Set(allTemperaments)];
        //console.log(uniqueTemperaments)
        // Guardar temperamentos en la base de datos
        await Temperament.bulkCreate(uniqueTemperaments.map((temp) => ({ Nombre: temp })));
    
        const getTemperaments = await Temperament.findAll()
    
        res.status(200).json(getTemperaments);
      } else{

        const getTemperaments = await Temperament.findAll()
        res.status(200).json(getTemperaments)
      }
    } catch (error) {
      console.error('Error al guardar los temperamentos:', error.message);
      res.status(500).send('Ocurrió un error al guardar los temperamentos');
  }
};

module.exports =  fetchTemperaments 
