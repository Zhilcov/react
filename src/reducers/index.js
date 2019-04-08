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
    ],
      value : false ,
      id : false , 
      lable: false 
  }
  
    function sortByValue(a,b) {  
      if(true){
        if (a.value > b.value) return -1;
        if (a.value < b.value) return 1;
      }else{
        if (a.value > b.value) return 1;
        if (a.value < b.value) return -1;
      }
     
    }
    function sortByName(a,b) {
      if(true){
        if (a.label > b.label) return 1;
        if (a.label < b.label) return -1;
      }else{
        if (a.value > b.value) return -1;
        if (a.value < b.value) return 1;
      }
      
    }

    function sortDefault(a,b) {
      if(true){
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
      }else{
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
      }
      
      
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
          console.log(action.bol);
          
            return Object.assign({} , state, {info : state.info.sort(sortByValue), value : !action.bol, })          
        }
      case SORT_BY_NAME:
        {   
            return Object.assign({} , state, {info : state.info.sort()})       
        } 
      case SORT_DEFAULT:
        { 
          return Object.assign({} , state, {info : state.info.sort(sortDefault)})       
        } 
      default:
        return state;
    }
  }