import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        items: [],
    },
    reducers: {
        setBooks(state, action){
            state.items = action.payload.items;            
        }
    }
});

export const booksAction = booksSlice.actions;
export default booksSlice;