import { actionTypes } from "../reducers/actionTypes"

export const setFavList = (payload: any) => {
    return (dispatch: any) => {
        dispatch({ type: actionTypes.MOVIE_LIST_SUCCESS, payload: payload })
    }
}