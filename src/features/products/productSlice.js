import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserLoginAPI, getProductData, getSingleProduct } from "./productApi";

const initialState = {
    loading: false,
    data: {},
    singleProductData: {},
    loginData: {}
}

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
    try {
        const response = await getProductData()
        if (response?.status === 200) {
            return response?.data
        }
    } catch (error) {
        console.error(error.message)
    }
})

export const getData = createAsyncThunk('product/getData', async (id) => {
    try {
        const response = await getSingleProduct(id)
        // console.log(response);
        if (response?.status === 200) {
            return response?.data
        }
    } catch (error) {
        console.error(error.message)
    }
})

export const UserLogin = createAsyncThunk('product/UserLogin', async (values) => {
    try {
        const response = await UserLoginAPI(values)
        // console.log(response);
        if (response && response.status === 200) {
            localStorage.setItem('token', response.data.token)
            return response.data
        }
    } catch (error) {
        console.error(error.message)
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        }).addCase(getData.pending, (state) => {
            state.loading = true
        }).addCase(getData.fulfilled, (state, action) => {
            state.singleProductData = action.payload
        }).addCase(UserLogin.fulfilled, (state, action) => {
            state.loginData = action.payload
        })
    }
})

export default productSlice.reducer