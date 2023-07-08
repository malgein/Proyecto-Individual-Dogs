// const axios = require('axios')
// const {Dog} = require('../db')

// const getAllDogs = async(req, res) => {
// 	try {
//     const response = await axios.get('https://api.thedogapi.com/v1/breeds');
//     const dogs = response.data;

//     res.json(dogs);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// }

// module.exports=getAllDogs

const axios = require('axios');
const { Dog } = require('../db');

const getAllDogs = async (req, res) => {
  try {
    // Obtener todos los perros de la base de datos
    const dbDogs = await Dog.findAll();

    // Obtener los perros de la API
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const apiDogs = response.data;

    // Combinar los perros de la base de datos y los de la API en una sola variable
    const allDogs = [...dbDogs, ...apiDogs];

    res.json(allDogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getAllDogs;
