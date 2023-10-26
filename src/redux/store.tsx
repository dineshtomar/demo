import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducers } from "./reducers";
import { reduxStorage } from "./reduxStorage";

const reducerConfig = {
    key: 'root',
    whitelist: ["auth", "home"],
    blacklist: [],
    storage: reduxStorage
}
const persist = persistReducer(reducerConfig, reducers)
export const store = configureStore({ middleware: [thunk, logger], reducer: persist })
export const persistor = persistStore(store);