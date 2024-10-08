import { createSlice } from "@reduxjs/toolkit";

const ambulanceSlice = createSlice({
    name:'ambulance',
    initialState: {
        requests: [],
        loading: false,
        error: null,
    },
    reducers: {
        requestAmbulanceStart: (state) => {
            state.loading = true;
        },

        requstAmbulanceSuccess: (state, action) => {
            state.requests.push(action.payload);
            state.loading = action.payload;
            state.error = null;
        },

        requestAmbulanceFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export const {
    requestAmbulanceStart,
    requstAmbulanceSuccess,
    requestAmbulanceFailure,
} = ambulanceSlice.actions;

export default ambulanceSlice.reducer;