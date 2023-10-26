import { actionTypes } from "./actionTypes"

const initialState = {
    loading: false,
    movies: [
        { id: 1, title: 'Movie 1', description: 'Description 1', isFav: false },
        { id: 2, title: 'Movie 2', description: 'Description 2', isFav: false },
        { id: 3, title: 'Movie 3', description: 'Description 3', isFav: false },
        { id: 4, title: 'Movie 4', description: 'Description 4', isFav: false },
        { id: 5, title: 'Movie 5', description: 'Description 5', isFav: false },
        { id: 6, title: 'Movie 6', description: 'Description 6', isFav: false },
        { id: 7, title: 'Movie 7', description: 'Description 7', isFav: false },
        { id: 8, title: 'Movie 8', description: 'Description 8', isFav: false },
    ],
    favMovies: []
}

export const homeReducer = (state = initialState, { type, payload }: any) => {
    switch (type) {
        case actionTypes.MOVIE_LIST_LOADING:
            return { ...state, loading: true }
        case actionTypes.MOVIE_LIST_SUCCESS:
            return { ...state, loading: false, movies: payload }
        case actionTypes.MOVIE_LIST_FAILED:
            return { ...state, loading: false, movies: payload }

        case actionTypes.MOVIE_LIST_FAV:
            return { ...state, loading: false, favMovies: payload }

        default:
            return state;
    }
}