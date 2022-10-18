import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currentCurrency: '$',
        list:[],
    },
    reducers: {
        updateList: (state, action) => {state.list = action.payload},
        setCurrentCurrency: (state, action) => {  state.currentCurrency = action.payload},

    },
    })
    
    export const { updateList, setCurrentCurrency} = currencySlice.actions;
    export default currencySlice.reducer;
    