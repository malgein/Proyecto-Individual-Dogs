const axios = require('axios')
const {Dog} = require('../db')

const getAllDogs = async(req, res) => {
	try {
    const response = await axios.get('https://api.thedogapi.com/v1/breeds');
    const dogs = response.data;

    res.json(dogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports=getAllDogs