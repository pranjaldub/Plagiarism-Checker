import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import input from "./input"

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, input)
const reducer = combineReducers({
    persistedReducer,
})
export const store = configureStore({
    reducer: reducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
export default store;