// basketSlice.js

import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"));
    }
    return [];
}

const writeBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}

export const basketSlice = createSlice({
    name: "basket",
    initialState: {
        products: getBasketFromStorage(),
    },
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products.find((product) => product.id === action.payload.id);
            if (findProduct) {
                
            } else {
                state.products = [...state.products, action.payload];
                writeBasketToStorage(state.products);
            }
        },
        removeFromBasket: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((product) => product.id !== productId);
            writeBasketToStorage(state.products);
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
