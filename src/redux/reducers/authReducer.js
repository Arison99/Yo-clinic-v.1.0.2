import { createSlice } from "@reduxjs/toolkit"; 

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token:null,
        isAutheticated: false,
        error: null,
    },

    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isAutheticated = true;

            state.error = null;

        },

        loginFailure: (state, action) => {
            state.error = action.payload;
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAutheticated = false;
            state.error = null;
        },

        signupSuccess: (state, action) => {
            state.user = action.payload.user,
            state.token = action.payload.token,
            state.isAutheticated = true;
            state.error = null;
        },

        signupFaliure: (state, action) => {
            state.error = action.payload;
        },

    },
});

export const { loginSuccess, loginFailure, logout, signupSuccess, signupFailure } = authSlice.actions;
export default authSlice.reducer;