import { createSlice } from "@reduxjs/toolkit"

const searchProductSlice = createSlice({
    name: 'searchProduct',
    initialState: '',
    reducers: {
        toggleSearchText(state, {payload}) {
            return payload
        }
    }
})

export const selectSearchProduct = state => state.searchProduct 

export const { toggleSearchText } = searchProductSlice.actions

export const searchProductReducer = searchProductSlice.reducer