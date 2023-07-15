const axios = require('axios')
const {Dog} = require('../db')

const getDogById = async(req, res) => {
	const {idRaza} = req.params

	try{
		if(idRaza.length<=9){
			const response = await axios.get(`https://api.thedogapi.com/v1/images/${idRaza}`)
			
		const data =  response.data
		console.log(idRaza.length)
		
			res.status(200).json(data)
		} else {
			const dogById = await Dog.findByPk(idRaza)
	
			res.status(200).json(dogById)
		}
	}catch(error){
		res.status(500).send(error.message)			
	}
}

module.exports =getDogById

