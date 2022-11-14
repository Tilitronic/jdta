import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        productsList:[],
        totalPrice: [] 
    },
    reducers: {
        updateProductsList: (state, action) => {
            const sameObject = state.productsList.find(object=>object.cartKey===action.payload.cartKey)
            if(sameObject){
                const sameObjectIndex = state.productsList.indexOf(sameObject)
                state.productsList[sameObjectIndex].amount+=1
                const totalPrice = action.payload.prices.map((obj)=>{
                    const currentTotalPrice = state.totalPrice.length>0 ? state.totalPrice.find(statePriceObj=>statePriceObj?.currency?.label===obj.currency.label)?.amount : 0
                    const newAmount =  obj.amount+currentTotalPrice;
                    const newTotalPrice = {
                        amount: newAmount,
                        currency: obj.currency
                    }
                    return newTotalPrice
                })
                state.totalPrice = [...totalPrice] 
            }
            else {
                state.productsList = [action.payload, ...state.productsList];
                const totalPrice = action.payload.prices.map((obj)=>{
                    const currentTotalPrice = state.totalPrice.length>0 ? state.totalPrice.find(statePriceObj=>statePriceObj?.currency?.label===obj.currency.label)?.amount : 0
                    const newAmount =  obj.amount+currentTotalPrice;
                    const newTotalPrice = {
                        amount: newAmount,
                        currency: obj.currency
                    }
                    return newTotalPrice
                })
                state.totalPrice = [...totalPrice] 
            }
        },
        increaseAmount: (state, action) => {  
            const sameObject = state.productsList.find(object=>object.cartKey===action.payload.cartKey)
            if(sameObject){
                const sameObjectIndex = state.productsList.indexOf(sameObject)
                state.productsList[sameObjectIndex].amount+=1
                const totalPrice = action.payload.prices.map((obj)=>{
                    const currentTotalPrice = state.totalPrice.length>0 ? state.totalPrice.find(statePriceObj=>statePriceObj?.currency?.label===obj.currency.label)?.amount : 0
                    const newAmount =  obj.amount+currentTotalPrice;
                    const newTotalPrice = {
                        amount: newAmount,
                        currency: obj.currency
                    }
                    return newTotalPrice
                })
                state.totalPrice = [...totalPrice] 
            }
        },
        decreaseAmount: (state, action) => {
            const sameObject = state.productsList.find(object=>object.cartKey===action.payload.cartKey)
            if(sameObject.amount>1){
                const sameObjectIndex = state.productsList.indexOf(sameObject)
                state.productsList[sameObjectIndex].amount-=1
                const totalPrice = action.payload.prices.map((obj)=>{
                    const currentTotalPrice = state.totalPrice.length>0 ? state.totalPrice.find(statePriceObj=>statePriceObj?.currency?.label===obj.currency.label)?.amount : 0
                    const newAmount =  -obj.amount+currentTotalPrice;
                    const newTotalPrice = {
                        amount: newAmount,
                        currency: obj.currency
                    }
                    return newTotalPrice
                })
                state.totalPrice = [...totalPrice] 
            }
            else if(sameObject.amount===1){
                const sameObjectIndex = state.productsList.indexOf(sameObject);
                state.productsList[sameObjectIndex].amount-=1
                const totalPrice = action.payload.prices.map((obj)=>{
                    const currentTotalPrice = state.totalPrice.length>0 ? state.totalPrice.find(statePriceObj=>statePriceObj?.currency?.label===obj.currency.label)?.amount : 0
                    const newAmount =  -obj.amount+currentTotalPrice;
                    const newTotalPrice = {
                        amount: newAmount,
                        currency: obj.currency
                    }
                    return newTotalPrice
                })
                state.totalPrice = [...totalPrice] 
                const newProductsList = state.productsList.filter((obj)=>obj.amount>0)
                state.productsList = [...newProductsList]
            }
        },

    },
    })
    
    export const { updateProductsList, increaseAmount, decreaseAmount} = cartSlice.actions;
    export default cartSlice.reducer;