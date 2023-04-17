const defaultSate = {
    customer: [],
}


export const customerReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER" :
            return {...state, cash: state.cash + action.payload}
        case "GET_CUSTOMER" :
            return {...state, cash: state.cash - action.payload}

        default:
            return state
    }
}

