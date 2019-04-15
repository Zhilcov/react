import * as types from '../constants'

export const sortByValue = (value) => ({ type: types.SORT_BY_VALUE, value })
export const sortByName = (name) => ({ type: types.SORT_BY_NAME, name})
export const sort = (sort) => ({ type: types.SORT_DEFAULT, sort})
export const showRecycle = () => ({ type: types.RECYCLE_BIN})
export const hideRecycle = (id) => ({ type: types.RECYCLE, id})

export const figuresHasErrored = (bool) => ({type: "FIGURES_HAS_ERRORED", hasErrored: bool})
export const figuresIsLoading = (bool) => ({type: "FIGURES_IS_LOADING",isLoading: bool})
export const figuresFetchSuccess = (figures) => ({type: "FIGURES_FETCH_SUCCESS",figures})
export const figuresUpdated = (bool) => ({ type: "FIGURES_WAS_UPDATED", bool})

export const getFigures = (url) => {
    return dispatch => {
        dispatch(figuresIsLoading(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(figuresIsLoading(false));
                dispatch(figuresUpdated(false));
                return response;
            })
            .then(response => response.json())
            .then(figures => dispatch(figuresFetchSuccess(figures)))
            .catch(() => dispatch(figuresHasErrored(true)));
    }
  };

export const addFigure = (url,label,value,sides) => {
            value = Math.round(value * 100) / 100
            return dispatch => {
                fetch(url, {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({label, value,sides, recycle:true })
                })
                    .then(response => {   
                        dispatch(figuresUpdated(true));
                    })
                    .catch((err)=>{console.log(err)})
        }
} 

export const deleteFigure = url => {
            return dispatch => {
            fetch(url, {
                method: "DELETE"
            })
                .then(response => {
                    dispatch(figuresUpdated(true));
                })
                .catch(()=> {console.log("Error with deleting")})
        } 
    }

export const editFigure = (url,value,sides) => {
    value = Math.round(value * 100) / 100
    return dispatch => {
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({value,sides, recycle:true })
        })
            .then(response => {
                dispatch(figuresUpdated(true));
            })
            .catch((err)=>{console.log(err)})
    }
}    