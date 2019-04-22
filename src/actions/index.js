import * as types from '../constants'
import axios from "axios"
import history from "../index"

export const sortByValue = (value) => ({ type: types.SORT_BY_VALUE, value })
export const sortByName = (name) => ({ type: types.SORT_BY_NAME, name})
export const sort = (sort) => ({ type: types.SORT_DEFAULT, sort})

export const figuresHasErrored = (bool) => ({type: "FIGURES_HAS_ERRORED", hasErrored: bool})
export const figuresIsLoading = (bool) => ({type: "FIGURES_IS_LOADING",isLoading: bool})
export const figuresFetchSuccess = (figures) => ({type: "FIGURES_FETCH_SUCCESS",figures})
export const figuresUpdated = (bool) => ({ type: "FIGURES_WAS_UPDATED", bool})

export const usersHasErrored = (bool) => ({type: "USERS_HAS_ERRORED", hasErrored: bool})
export const usersIsLoading = (bool) => ({type: "USERS_IS_LOADING",isLoading: bool})
export const usersFetchSuccess = (users) => ({type: "USERS_FETCH_SUCCESS",users})
export const usersUpdated = (bool) => ({ type: "USERS_WAS_UPDATED", bool})

export const success = (user) => { return { type: "REGISTER_SUCCESS", user } }
export const badRequestLogin = (bool) => ({type:"BAD_REQUEST", bool}) 
export const badRequestChangePassword = (bool,message) =>({type:"BAD_CHANGEPASS_REQUEST", bool,message})
export const goodRequestChangePassword = (bool,message) =>({type:"GOOD_CHANGEPASS_REQUEST", bool,message})

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
                    body: JSON.stringify({label, 
                                          value,
                                          sides, 
                                          recycle:true,
                                          ownUser:  localStorage.getItem('id') 
                                         })
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
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({id: localStorage.getItem("id")})
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

export const hideRecycle = (url) => {
    return dispatch => {
        dispatch(figuresIsLoading(true));
        fetch(url)
            .then(response => {
                dispatch(figuresUpdated(true));
            })
            .catch((err)=>{console.log(err)})
    }
}

export const showRecycle = (url) => {
        return dispatch => {
            dispatch(figuresIsLoading(true));
            fetch(url)
                .then(response => {
                    dispatch(figuresUpdated(true));
                })
             .catch((err)=>{console.log(err)})
   }
    
}

export const register = (username,password) => {
    return dispatch => {
        axios.post('http://localhost:3003/register', {
            username: username,
            password: password
          })
          .then(function (response) {
            if(response.status === 200){
                localStorage.setItem('user', JSON.stringify(response.data.token));
                localStorage.setItem('username', response.data.user);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('isAdmin', response.data.admin);
                localStorage.setItem('lastChange', response.data.lastChange);
                history.push('/')
                dispatch(badRequestLogin(false))
            }else if(response.status === 203){
                dispatch(badRequestLogin(true))
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }
}
export const changeUsername = (user,username) => {
    return dispatch => {
        axios.post('http://localhost:3003/changeUsername', {
            user: user,
            username: username
          })
          .then(function (response) {
            if(response.status === 200){
              localStorage.setItem('username', response.data.username);
              history.push('/')
            }else if(response.status === 203){
               
            }
          })
          .catch(function (response) {
            console.log(response);
          });
    }
}
export const changePassword = (user,password,newPassword) => {
    return dispatch => {
        axios.post('http://localhost:3003/changePassword', {
            user: user,
            password: password,
            newPassword: newPassword
          })
          .then(function (response) {
            if(response.status === 200){
                localStorage.setItem('lastChange', response.data.lastChange);
                dispatch(badRequestChangePassword(false,""))
                dispatch(goodRequestChangePassword(true,"Пароль успешно изменен"))
            }else if(response.status === 203){
                dispatch(badRequestChangePassword(true, "Прежний пароль введён неправильно"))
            }
          })
          .catch(function (response) {
            console.log(response);
          });
    }
}

export const login = (username,password) => {
    return dispatch => {
        axios.post('http://localhost:3003/login', {
            username: username,
            password: password
          })
          .then(function (response) {
            if(response.status === 200){
                localStorage.setItem('user', response.data.token);
                localStorage.setItem('username', response.data.user);
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('isAdmin', response.data.admin);
                localStorage.setItem('lastChange', response.data.lastChange);
                history.push('/')
                dispatch(badRequestLogin(false))
            }else if(response.status === 203){
                console.log("User not exist or password not correct");
                dispatch(badRequestLogin(true))
            }
          })
          .catch(function (response) {
            console.log(response);
          });
    }
}

export const getUsers = (url) => {
    return dispatch => {
        dispatch(usersIsLoading(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(usersIsLoading(false));
                dispatch(usersUpdated(false));
                
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(usersFetchSuccess(users)))
            .catch(() => dispatch(usersHasErrored(true)));
    }
};

export const setAdmin = url =>{
    return dispatch => {
        fetch(url, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: localStorage.getItem("id")})
        })
            .then(response => {
                dispatch(usersUpdated(true));
            })
            .catch((err)=>{console.log(err)})
    }
}

export const deleteUser = url => {
    return dispatch => {
        fetch(url, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: localStorage.getItem("id")})
        })
            .then(response => {
                console.log(response);
                
                dispatch(usersUpdated(true));
            })
            .catch(()=> {console.log("Error with deleting")})
    } 
}