import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts, getProduct, getProductCategories, fetchProductByCategory } from "../../services/apiProducts";

export const fetchProducts = createAsyncThunk( 'products/fetchProducts', async () => {
    const data = await getProducts()
    return data 
})

export const fetchProductsById = createAsyncThunk('products/fetchProductsById',  async (id) => {
    const data = await getProduct(id)
    return data 
})

export const fetchCategories = createAsyncThunk('product/fetchCategories', async () => {
    const data = await getProductCategories()
    return data 
})

export const fetchItemsByCategory = createAsyncThunk('product/fetchProductByCategory', async (category) =>{
    const data = await fetchProductByCategory(category)
    return data 
})

const initalState = {
    items : [],
    selectedProduct : null,
    categories : [],
    categoryProduct : [],
    status : 'idle',
    error : ''
}

const productSlice = createSlice({
    name : 'products',
    initialState : initalState,
    reducers : {

    },
    extraReducers : (builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProducts.fulfilled, (state, action)=>{
            state.status = "succeeded",
            state.items = action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message
        })
        .addCase(fetchProductsById.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchProductsById.fulfilled, (state, action)=>{
            state.status = "succeeded",
            state.selectedProduct = action.payload
        })
        .addCase(fetchProductsById.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message
        })
        .addCase(fetchCategories.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            state.status = "succeeded",
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message
        })
        .addCase(fetchItemsByCategory.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchItemsByCategory.fulfilled, (state, action)=>{
            state.status = "succeeded",
            state.categoryProduct = action.payload
        })
        .addCase(fetchItemsByCategory.rejected, (state, action)=>{
            state.status = "failed",
            state.error = action.error.message
        })
    }
})

export default productSlice.reducer

export const selectAllProducts = (state) => state.products.items
export const selectProductById = (state) => state.products.selectedProduct
export const selectCategories = (state) => state.products.categories
export const selectCategoryProducts = (state) => state.products.categoryProduct