import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk';
import { initialState } from './reducer';


const middleware = applyMiddleware(thunk);


const store = createStore(rootReducer, initialState, middleware);

export default store