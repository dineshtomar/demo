import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";
import { homeReducer } from "./homeReducer";
import { actionTypes } from "./actionTypes";

const appReducer = combineReducers({
    auth: authReducer,
    home: homeReducer
})

export const reducers = (state: any, action: any) => {
    if (action.type === actionTypes.RESET)
        return appReducer(undefined, action)
    else return appReducer(state, action)
}