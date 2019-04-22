import { combineReducers } from 'redux'
import todos from './figuresOperation'
import {figuresHasErrored, figuresIsLoading, figuresUpdated, authorizRequests,  
        usersHasErrored, usersIsLoading,usersUpdated,usersFetchSuccess,
        changePassRequests,changeUsernameRequests} from "./serverResponse"
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  todos,
  figuresHasErrored,
  figuresIsLoading,
  figuresUpdated,
  authorizRequests,
  usersHasErrored, 
  usersIsLoading,
  usersUpdated,
  usersFetchSuccess,
  changePassRequests,
  changeUsernameRequests
})

export default rootReducer
