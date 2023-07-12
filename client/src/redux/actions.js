import axios from 'axios'
export const ADD_DOGS = 'ADD_DOGS'
export const ADD_TEMPERAMENTS = 'ADD_TEMPERAMENTS'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const FILTER_BY_TEMPERAMENT = 'FILTER_BY_TEMPERAMENT'
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const ORDER_BY_WEIGHT = 'ORDER_BY_WEIGHT'

export const getAllDogs = () => {
	return async function(dispatch){
		let response = await axios.get('http://localhost:3001/dogs')
		// const limitedData = response.data.slice(start, end)
		return dispatch({
			type: ADD_DOGS,
			payload: response.data
			// payload: limitedData
		})
	}
}

export const getTemperaments = () => {
	return async function(dispatch){
		let response = await axios.get('http://localhost:3001/temperaments')
		return dispatch({
			type: ADD_TEMPERAMENTS,
			payload: response.data
		})
	}
}

export const orderByName = order => {
	return{
		type: ORDER_BY_NAME,
		payload: order
	}
}

export const filterByTemperament = temperament => {
	return {
		type: FILTER_BY_TEMPERAMENT,
		payload: temperament
	}
}

export const orderByWeight = order => {
	return{
		type: ORDER_BY_WEIGHT,
		payload: order
	}
}


export const filterByOrigin = origin => {
	return{
		type: FILTER_BY_ORIGIN,
		payload: origin
	}
}

