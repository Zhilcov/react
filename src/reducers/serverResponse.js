export function figuresHasErrored(state = false, action){
    switch (action.type) {
        case "FIGURES_HAS_ERRORED":
            return action.hasErrored;
        default:
            return state;
    }
}

export function figuresIsLoading(state = false, action) {
    switch (action.type) {
        case "FIGURES_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
}

export function figuresUpdated(state = false, action) {
    switch (action.type) {
        case "FIGURES_WAS_UPDATED":
            return action.bool
        default:
            return state;
    }
}

export function authorizRequests(state = false, action){
    switch (action.type) {
        case "BAD_REQUEST":
            return action.bool
        default:
            return state;
    }
}

export function changePassRequests(state = {bad:false, good:false, message:""}, action){
    switch (action.type) {
        case "BAD_CHANGEPASS_REQUEST":
            return Object.assign({},state, {bad:action.bool, good:false, message:action.message} )
        case "GOOD_CHANGEPASS_REQUEST":
            return Object.assign({},state, {good:action.bool, message:action.message} )    
        default:
            return state;
    }
}

export function usersFetchSuccess(state = [], action){
    switch (action.type) {
        case "USERS_FETCH_SUCCESS":        
            var newState = action.users
            return newState
        default:
            return state;
    }
}

export function usersHasErrored(state = false, action){
    switch (action.type) {
        case "USERS_HAS_ERRORED":
            return action.hasErrored;
        default:
            return state;
    }
}

export function  usersIsLoading(state = false, action) {
    switch (action.type) {
        case "USERS_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
}

export function  usersUpdated(state = false, action) {
    switch (action.type) {
        case "USERS_WAS_UPDATED":
            return action.bool
        default:
            return state;
    }
}