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