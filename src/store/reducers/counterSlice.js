import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
});

export default counterSlice.reducer;
