import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "./slices/cartSlice";

const store= configureStore({
    reducer: {
        allcart: cartReducer,
    }
})
export default store