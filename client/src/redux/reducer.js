import { ADD_DOGS, ORDER_BY_WEIGHT, ORDER_BY_NAME, FILTER_BY_TEMPERAMENT, FILTER_BY_ORIGIN, ADD_TEMPERAMENTS, HIDE_SEARCH, SHOW_SEARCH} from "./actions"

export const initialState={
  allDogs : [],
	alTemperaments: [],
	dogsFiltered: [],
	search: true,
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

			case FILTER_BY_ORIGIN: 
				
				const originDogs = [...state.allDogs].filter(elem => typeof elem.ID === payload || typeof elem.id === payload)
				return{
					...state, dogsFiltered: originDogs
				}
			case ORDER_BY_WEIGHT:
					let weightResult = []
					if(payload === 'ascendente'){
						const ascendingWeight = [...state.allDogs].sort((a,b) => {
							const weightA = parseInt(a.weight?.imperial.split(' - ')[0])
							const weightB = parseInt(b.weight?.imperial.split(' - ')[0])
							return weightA - weightB
						}) 
						weightResult = [...ascendingWeight]
					}	else if(payload=== 'descendente'){
						const descendingWeight = [...state.allDogs].sort((a,b) => {
							const weightA = parseInt(a.weight?.imperial.split(' - ')[1])
							const weightB = parseInt(b.weight?.imperial.split(' - ')[1])
							return weightB - weightA
						}) 
						weightResult = [...descendingWeight]
					} else if (payload === 'defecto') {
						weightResult = []
					}
				return{
					...state, dogsFiltered: weightResult
				}
			case ORDER_BY_NAME:
				let nameResult = []
				if(payload === 'ascendente'){
					const ascending = [...state.allDogs].sort((a,b) => a.name?.localeCompare(b.name))
					nameResult =[...ascending]
				}	else if(payload=== 'descendente'){
					const descending = [...state.allDogs].sort((a,b) => b.name?.localeCompare(a.name))
					nameResult= [...descending]
				} else if(payload==='defecto'){
					nameResult = []
				}
				return{
					...state, dogsFiltered: nameResult
				}
				case HIDE_SEARCH:
				return{
					...state, search: false
				}
				case SHOW_SEARCH:
					return {
						...state, search: true
					}
			default: return {...state}
    }
}

export default rootReducer