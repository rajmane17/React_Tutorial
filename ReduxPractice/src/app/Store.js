import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const Store = configureStore({
    // hum yaha reducers ki puri list de skte hai but abhi humare yaha ek hi reducer hai
    reducer: todoReducer
})
