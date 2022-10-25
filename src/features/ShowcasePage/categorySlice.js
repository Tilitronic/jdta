import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        currentCategory: 0,
        categoryList:[],
    },
    reducers: {
        updateCategoryList: (state, action) => {state.categoryList = action.payload},
        setCurrentCategory: (state, action) => {  state.currentCategory = action.payload},

    },
    })
    
    export const { updateCategoryList, setCurrentCategory} = categorySlice.actions;
    export default categorySlice.reducer;