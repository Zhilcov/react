import * as types from '../constants'

export const addFigure = (text,value) => ({ type: types.ADD_FIGURE, text , value })
export const deleteFigure = id => ({ type: types.DELETE_FIGURE, id })