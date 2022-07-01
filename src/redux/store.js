import {combineReducers} from "redux";
import bookReducer from "./bookSlice";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    bookReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
