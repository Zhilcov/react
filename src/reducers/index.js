import { combineReducers } from 'redux'
import todos from './figuresOperation'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  todos
})

export default rootReducer
