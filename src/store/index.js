import {combineReducers, createStore} from "redux";
import {customerReducer} from "./customerReducer";


const rootReducer = combineReducers({
    cash: '',
    customer: customerReducer,
})

export const store = createStore(rootReducer)
