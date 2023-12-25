import { configureStore } from "@reduxjs/toolkit";
import mySlice from "./slices/mySlice";

const store = configureStore({
    reducer: {
        slice1: mySlice
    }
})

export default store;