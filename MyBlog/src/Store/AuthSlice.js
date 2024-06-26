import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status: false,
    userData: null
}

export const AuthSlice = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        Login: (state, action) => {
            state.status = true,
            state.userData = action.payload.userData
        },
        logOut: (state, action) => { 
            state.state = false,
            state.userData = null
        }
    }
})

export const {Login, logOut} = AuthSlice.actions;

export default AuthSlice.reducer