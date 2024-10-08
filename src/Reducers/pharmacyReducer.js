import { createSlice } from "@reduxjs/toolkit";

const pharmacySlice = createSlice({
    name: 'pharmacy',
    initialState: {
        medications: [],
        cart: [],
        loading: false,
        error: null,
    },

    reducers: {
        fetchMedicationsStart: (state) => {
            state.loading = true;
        },

        fetchMedicationsSuccess: (state) => {
            state.medications = action.payload;
            state.loading = false;
            state.error = null;
        },

        fetchmedicationsFailure: (state) => {
            state.error = action.payload;
            state.loading = false;
        },

        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },

        removeFromCart: (state, action) => {
            state.cart.filter((item) => 
            item.id !== action.payload);
        },
    },
});

export const {
    fetchMedicationsStart,
    fetchMedicationsSuccess,
    fetchmedicationsFailure,
    addToCart,
    removeFromCart,
} = pharmacySlice.actions;

export default pharmacySlice.reducer;