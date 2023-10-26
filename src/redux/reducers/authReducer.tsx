import { actionTypes } from "./actionTypes"

const initialState = {
    loading: false,
    userData: {}
}

export const authReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case actionTypes.LOADING:
            return { ...state, loading: true }
        case actionTypes.LOGIN_SUCCESS:
            return { ...state, loading: false, userData: payload }
        case actionTypes.LOGIN_FAILED:
            return { ...state, loading: false, userData: payload }

        case actionTypes.SIGNUP_SUCCESS:
            return { ...state, loading: false, userData: payload }
        case actionTypes.SIGNUP_FAILED:
            return { ...state, loading: false, userData: payload }

        case actionTypes.LOGUT_SUCCESS:
            return { ...state, loading: false, userData: payload }
        case actionTypes.LOGUT_FAILED:
            return { ...state, loading: false, userData: payload }

        case actionTypes.LOADING_STOP:
            return { ...state, loading: false }
        case actionTypes.RESET:
            return { ...state, loading: false, userData: {} }

        default:
            return state;
    }
}