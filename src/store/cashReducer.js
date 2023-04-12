const defaultSate = {
    cash: 5
}
const cashReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case "ADD_CASH" :
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH" :
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}
