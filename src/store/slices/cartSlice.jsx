import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../../ProductData";

const initialState = {
    cart: [],
    items: ProductData,
    totalQuantity: 0,
    totalPrice: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
                state.cart[find].quantity += 1;
            } else {
                state.cart.push(action.payload)
            }
        },
        getCartTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = parseFloat(price) * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseFloat(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },
    },
});

export const { addToCart, getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;

