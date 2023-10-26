import { actionTypes } from "../reducers/actionTypes"

export const login = (username: string, password: string) => {
    return (dispatch: any) => {
        dispatch({ type: actionTypes.LOADING })
        try {
            // do the api call stuff here
            setTimeout(() => {
                dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: { username, password } });
            }, 500);
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.LOGIN_FAILED, payload: error })
        }
    }
}

export const register = (data: any) => {
    return (dispatch: any) => {
        dispatch({ type: actionTypes.LOADING })
        try {
            // do the api call stuff here
            setTimeout(() => {
                dispatch({ type: actionTypes.SIGNUP_SUCCESS, payload: data })
            }, 500);
        } catch (error) {
            console.log(error);
            dispatch({ type: actionTypes.SIGNUP_FAILED, payload: error })
        }
    }
}

export const logout = (navigation: any) => {
    return (dispatch: any) => {
        dispatch({ type: actionTypes.LOADING })
        try {
            // do the api call stuff here
            setTimeout(() => {
                dispatch({ type: actionTypes.RESET })
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }
}