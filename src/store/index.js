import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import booksSlice from "./booksSlice";

const store = configureStore({
    reducer: {
        books: booksSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store; 