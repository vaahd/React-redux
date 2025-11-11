import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk ("categories/fetch", async() => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    return res.json();
});

const categorySlice = createSlice({
    name:"categories",
    initialState: {list:[], loading:false},
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {state.loading = true})
        .addCase(fetchCategories.fulfilled, (state,action) => {
            state.loading = false;
            state.list = action.payload;
        })
        .addCase(fetchCategories.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default categorySlice.reducer;