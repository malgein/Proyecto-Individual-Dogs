import { ADD_DOGS, ORDER_BY_WEIGHT, ORDER_BY_NAME, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, ADD_TEMPERAMENTS} from "./actions"

export const initialState={
  allDogs : [],
	alTemperaments: [],
	dogsFiltered: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
			case ADD_DOGS: 
				return{
					...state,
					allDogs: payload
				}
			case ADD_TEMPERAMENTS:
				return{
					...state,
					allTemperaments: payload
				}
			case FILTER_BY_TEMPERAMENT:
				// const regexp = new RegExp(payload)
				// const dogsFilteredByTemp = [...state.allDogs].filter(temps => regexp.test(temps.temperament))

				const classifiedDogs = [...state.allDogs].filter(elem => elem.temperament?.split(', ').includes(payload) || elem.Temperamentos?.split(', ').includes(payload))
    		// console.log(result)		
				// console.log(classifiedDogs)
				return{
					...state, dogsFiltered: classifiedDogs
				}
			case ORDER_BY_WEIGHT:
				const dogsSortedByWeight = [...state.allDogs].sort((a, b) => {

				})
				return{
					...state
				}
			case ORDER_BY_NAME:
				
			default: return {...state}
    }
}

export default rootReducer