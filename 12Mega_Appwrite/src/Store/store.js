import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./AuthSlice"

const store = configureStore({
    reducer:{
        Authentication:authSlice
    }
})

export default store