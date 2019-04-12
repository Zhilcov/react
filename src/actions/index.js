import * as types from '../constants'

export const editFigure = (id,value,sides) => ({ type: types.EDIT_FIGURE, id , value,sides })
export const deleteFigure = id => ({ type: types.DELETE_FIGURE, id })
export const sortByValue = (value) => ({ type: types.SORT_BY_VALUE, value })
export const sortByName = (name) => ({ type: types.SORT_BY_NAME, name})
export const sort = (sort) => ({ type: types.SORT_DEFAULT, sort})
export const showRecycle = () => ({ type: types.RECYCLE_BIN})
export const hideRecycle = (id) => ({ type: types.RECYCLE, id})
export const figuresHasErrored = (bool) => ({type: "FIGURES_HAS_ERRORED", hasErrored: bool})
export const figuresIsLoading = (bool) => ({type: "FIGURES_IS_LOADING",isLoading: bool})
export const figuresFetchSuccess = (figures) => ({type: "FIGURES_FETCH_SUCCESS",figures})
export const getFigures = (url) => {
    return dispatch => {
        dispatch(figuresIsLoading(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(figuresIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(figuresFetchSuccess(persons)))
            .catch(() => dispatch(figuresHasErrored(true)));
    }
  };

export const addFigure = (url,text,value,sides) => {
    return dispatch => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({text:text,value:value,sides:sides})
        })
            /* .then(response => {
                return response
            }) */
            .then(response => response.json())
            .then(persons => console.log(persons))
            .catch(()=>{})
    }
} 