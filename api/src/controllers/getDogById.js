const axios = require('axios')
const {Dog} = require('../db')

const getDogById = async(req, res) => {
	const {idRaza} = req.params

	try{
		if(idRaza.length<=3){
			const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`)
			
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

// const axios = require('axios')
// const {Dog} = require('../db')

// const getDogById = async(req, res) => {
// 	const {idRaza} = req.params

// 	try{
// 		const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`)
// 		const data =  response.data
// 		console.log(data)
// 		if(data !=={} ){
// 			res.status(200).json(data)
// 		}else if(data==={}){
// 			const dogById = await Dog.findByPk(idRaza)
// 			if(dogById === null){
// 				res.status(404).send('Dog not found')
// 			}else{
// 				res.status(200).json(dogById)
// 			}
// 		}
// 	}catch(error){
// 		res.status(500).send(error.message)			
// 	}
// }

// module.exports =getDogById

// const axios = require('axios')
// const {Dog} = require('../db')

// const getDogById = async(req, res) => {
// 	const {idRaza} = req.params

// 	try{
// 		const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`)
// 		const data =  response.data
// 		console.log(data)
// 		if(data !=={} ){
// 			res.status(200).json(data)
// 		}else if(data==={}){
// 			const dogById = await Dog.findByPk(idRaza)
// 			if(dogById) {
// 				res.status(200).json(dogById)
// 			}else{
// 				res.status(404).send("Dog not found")
// 			}
// 		}
// 	}catch(error){
// 		res.status(500).send(error.message)			
// 	}
// }

// module.exports =getDogById




