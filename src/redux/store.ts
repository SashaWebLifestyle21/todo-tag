import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from './reducers/ToDoSlice'
import tagReducer from './reducers/tagSlice'

const rootReducer = combineReducers({
    todoReducer,
    tagReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
