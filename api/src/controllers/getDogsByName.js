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
		if(dogsData.length>0){
			res.json(dogsData)
		} else{
			const response = await axios.get('https://api.thedogapi.com/v1/breeds');
			const dogs = response.data.filter((dog) =>
				dog.name.toLowerCase().includes(name.toLowerCase())
			);
			// console.log(dogs.data)
			res.json(dogs);
		} 
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports= getDogsByName