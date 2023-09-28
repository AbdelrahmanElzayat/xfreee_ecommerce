import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async()=>{
    const res = await fetch("https://xfreee-ea88b-default-rtdb.firebaseio.com/products/products.json");
    const data = await res.json();
    // console.log(data);
    return data;
})
const initialState = 
{
    data: [],
    loading: true
};
const productSlice = createSlice({
    initialState,
    name: "productSlice",
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending, (state,action)=>{
            state.loading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state,action)=>{
            state.loading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchProducts.rejected, (state,action)=>{
            state.loading = false;
            state.data = [];
        })
    }

})

export const {} = productSlice.actions;
export default productSlice.reducer