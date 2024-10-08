import { createSlice } from "@reduxjs/toolkit"; 

// authReducer.js

const initialState = {
    user: null,  // user will contain role information
    token: null,
};

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

//Action to set user and token
export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,  // Store user with role info
                token: action.payload.token,
            };
            default:
                return state;
    }
}

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