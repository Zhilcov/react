import {
    ADD_FIGURE,
    DELETE_FIGURE,
  } from '../constants'
  const initialState =  [
      {
          value : 124,
          id : 0,
          label: "rectangle"
      },
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
    function compare(a,b) {
      if (a.value > b.value)
        return -1;
      if (a.value < b.value)
        return 1;
      return 0;
    }

    

  export default function todos(state = initialState, action) {
    switch (action.type) {
      case ADD_FIGURE:
      return [
        ...state,
        { 
          value: Math.round(action.value * 100) / 100 ,
          id : state.reduce((maxId, figure) => Math.max(figure.id, maxId), -1) + 1,
          label : action.text
        }
      ].sort(compare);     

      case DELETE_FIGURE:
        {          
          return state.filter(figure =>
            figure.id !== action.id
          )
        }

      default:
        return state.sort(compare);
    }
  }