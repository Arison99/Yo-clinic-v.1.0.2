import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    user: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setUser, logout } = authSlice.actions;

export const loginUser = (credentials) => async(dispatch) => {
    try {
        const response = await axios.post('/api/login', credentials);
        dispatch(setUser(respponse.data));
    } catch (error) {
        console.error('Failed to login', error);
    }
};

export default authSlice.reducer;