import * as types from '../constants'

export const addFigure = (text,value,sides) => ({ type: types.ADD_FIGURE, text , value,sides })
export const editFigure = (id,value,sides) => ({ type: types.EDIT_FIGURE, id , value,sides })
export const deleteFigure = id => ({ type: types.DELETE_FIGURE, id })
export const sortByValue = (value) => ({ type: types.SORT_BY_VALUE, value })
export const sortByName = (name) => ({ type: types.SORT_BY_NAME, name})
export const sort = (sort) => ({ type: types.SORT_DEFAULT, sort})
export const showRecycle = () => ({ type: types.RECYCLE_BIN})
export const hideRecycle = (id) => ({ type: types.RECYCLE, id})