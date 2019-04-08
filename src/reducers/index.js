import {
    ADD_FIGURE,
    DELETE_FIGURE,
    SORT_BY_VALUE,
    SORT_BY_NAME,
    SORT_DEFAULT
  } from '../constants'
  const initialState = {
    info : [
      {
          value : 22,
          id : 1,
          label: "triangle"
      },
      {
          value : 23,
          id : 2,
          label: "circle"
      },
      {
        value : 23,
        id : 3,
        label: "square"
      }
    ]
  }

    function sortByValue(a,b) {
      if (a.value > b.value)
        return -1;
      if (a.value < b.value)
        return 1;
      return 0;
    }
    function sortByName(a,b) {
      if (a.label > b.label)
        return 1;
      if (a.label < b.label)
        return -1;
      return 0;
    }

    function sortDefault(a,b) {
      if (a.id > b.id)
        return 1;
      if (a.id < b.id)
        return -1;
      return 0;
    }
  export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_FIGURE:
      return  Object.assign({} ,state, { info : state.info.concat(
        { 
          value: Math.round(action.value * 100) / 100 ,
          id : state.info.reduce((maxId, figure) => Math.max(figure.id, maxId), -1) + 1,
          label : action.text
        }
      ) });          

      case DELETE_FIGURE:
        {    
            return Object.assign({}, state, {info:state.info.filter(figure => figure.id !== action.id)})  
        }

      case SORT_BY_VALUE:
        {    
             return Object.assign({} , state, {info : state.info.sort(sortByValue)})          
        }
      case SORT_BY_NAME:
        {   
          return Object.assign({} , state, {info : state.info.sort(sortByName)})       
        } 
      case SORT_DEFAULT:
        {    
          return Object.assign({} , state, {info : state.info.sort(sortDefault)})       
        } 
      default:
        return state;
    }
  }