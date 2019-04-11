import {
    ADD_FIGURE,
    DELETE_FIGURE,
    SORT_BY_VALUE,
    SORT_BY_NAME,
    SORT_DEFAULT,
    EDIT_FIGURE,
    RECYCLE,
    RECYCLE_BIN
  } from '../constants'
  const initialState = {
    info : [
      {
          value : 22,
          id : 1,
          label: "triangle",
          recycle: true
      },
      {
          value : 23,
          id : 2,
          label: "circle",
          recycle: true
      },
      {
        value : 23,
        id : 3,
        label: "square",
        recycle: true
      }
    ],
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
      case ADD_FIGURE:
      return  Object.assign({} ,state, { info : state.info.concat(
        { 
          value: Math.round(action.value * 100) / 100 ,
          id : state.info.reduce((maxId, figure) => Math.max(figure.id, maxId), -1) + 1,
          label : action.text,
          recycle: true
        }
      ).sort(sortDefault) });          
      
      case RECYCLE:
      {    
        return Object.assign({}, state, {info:state.info.map(figure => {
          if (figure.id == action.id) {
            return {
              ...figure,
              recycle: false
            }
          }
          return figure
        })}
        ) 
      }
      
      case RECYCLE_BIN:
      {    
        return Object.assign({}, state, {info:state.info.map(figure => {
          if (!figure.recycle) {
            return {
              ...figure,
              recycle: true
            }
          }
          return figure
        })}
        )   
      }

      case DELETE_FIGURE:
        {    
            return Object.assign({}, state, {info:state.info.filter(figure => figure.id !== action.id)})  
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
      case EDIT_FIGURE:
        { 
          return Object.assign({}, state, {info:state.info.map(figure => {
            if (figure.id == action.id) {
              return {
                ...figure,
                value: Math.round(action.value * 100) / 100
              }
            }
            return figure
          })}
          )
        } 
      default:
        return state;
    }
  }