const {Op} = require('sequelize')
const axios = require('axios')
const {Dog} = require('../db')

const getDogsByName = async(req, res) =>{

	const { name } = req.query;

  try {
		const dogsData = await Dog.findAll({
    	where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        	},
      	},
    	});
			// console.log(dogsData.length)
			const response = await axios.get('https://api.thedogapi.com/v1/breeds');
			const dogs = response.data.filter((dog) =>
				dog.name.toLowerCase().includes(name.toLowerCase())
			);
			// console.log(dogs.data)
			const allDogs = [...dogsData, ...dogs]
			res.json(allDogs); 
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports= getDogsByName