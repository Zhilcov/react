import * as types from '../constants'

export const addFigure = (text,value) => ({ type: types.ADD_FIGURE, text , value })
export const deleteFigure = id => ({ type: types.DELETE_FIGURE, id })
export const sortByValue = (bol) => ({ type: types.SORT_BY_VALUE, bol })
export const sortByName = () => ({ type: types.SORT_BY_NAME})
export const sort = () => ({ type: types.SORT_DEFAULT})