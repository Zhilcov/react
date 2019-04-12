import { combineReducers } from 'redux'
import todos from './figuresOperation'
import {figuresHasErrored, figuresIsLoading} from "./serverResponse"
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  todos,
  figuresHasErrored,
  figuresIsLoading
})

export default rootReducer
