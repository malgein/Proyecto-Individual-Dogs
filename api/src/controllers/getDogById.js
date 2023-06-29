const axios = require('axios')
const {Dog} = require('../db')

const getDogById = async(req, res) => {
	const {idRaza} = req.params

	try{
		const dogById = await Dog.findByPk(idRaza)

		if(dogById){ 
			res.json(dogById)
		}else{
			const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`)
			
			const data = response.data
			
			res.status(200).json(data)
		}
	}catch(error){
		res.status(500).send(error.message)			
	}
}

module.exports =getDogById