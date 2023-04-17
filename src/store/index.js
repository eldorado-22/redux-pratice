import {combineReducers, createStore} from "redux";
import {customerReducer} from "./customerReducer";
import {cashReducer} from "./cashReducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
    cash: cashReducer,
    customer: customerReducer,
})




export const store = createStore(rootReducer, composeWithDevTools())
