import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: undefined,
        username: undefined,
        expiration: undefined
    },
    reducers: {
        loginUser(state, action){
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.expiration = action.payload.expiration;
        },
        logoutUser(state, action){
            state.token = undefined;
            state.username = undefined;
            state.expiration = undefined;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;