import {
    SORT_BY_VALUE,
    SORT_BY_NAME,
    SORT_DEFAULT
  } from '../constants'
  const initialState = {
    info : [],
      value : false ,
      id : false , 
      lable: false 
  }
    
  export default function todos(state = initialState, action) {
    function sortDefault(a,b) {
      if(action.sort){
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
      }else{
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
      }
    }
    function sortByValue(a,b) {        
      if(!action.value){
        if (a.value > b.value) return -1;
        if (a.value < b.value) return 1;
      }else{
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
      }
    }
    function sortByName(a,b) {
      if(!action.name){
        if (a.label > b.label) return 1;
        if (a.label < b.label) return -1;
      }else{
        if (a.label > b.label) return -1;
        if (a.label < b.label) return 1;
      }
      
    }
    switch (action.type) {
      case "FIGURES_FETCH_SUCCESS" :
      {
        return Object.assign({} ,state, { info : action.figures.sort(sortDefault) })
      }        
      
  
      case SORT_BY_VALUE:
        {              
            return Object.assign({} , state, {info : state.info.sort(sortByValue), value : !action.value })          
        }
      case SORT_BY_NAME:
        {   
            return Object.assign({} , state, {info : state.info.sort(sortByName), lable : !action.name})       
        } 
      case SORT_DEFAULT:
        { 
          return Object.assign({} , state, {info : state.info.sort(sortDefault), id:!action.sort })       
        }  
      default:
        return state;
    }
  }