export function figuresHasErrored(state = false, action){
    switch (action.type) {
        case "PERSONS_HAS_ERRORED":
            return action.hasErrored;
        default:
            return state;
    }
}

export function figuresIsLoading(state = false, action) {
    switch (action.type) {
        case "PERSONS_IS_LOADING":
            return action.isLoading;
        default:
            return state;
    }
}