import { createSlice } from "@reduxjs/toolkit"
import { STATUS } from "../API/API"

const productSlice = createSlice({
   name: 'product',
   initialState: {
    data: [],
    status: STATUS.IDLE
   },
   reducers : {
    setProducts(state, {payload}) {
        state.data = payload
    }, 
    setStatus(state, {payload}) {
        state.status = payload
    }
   }
})

export const selectProduct = state => state.product

export const {setProducts, setStatus} = productSlice.actions

export const productReducer = productSlice.reducer