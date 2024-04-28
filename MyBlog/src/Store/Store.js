import {configureStore} from "@reduxjs/toolkit"
import AuthSlice from "./AuthSlice"

const Store = configureStore({
    reducer:{
        Authentication: AuthSlice
    }
})

export default Store