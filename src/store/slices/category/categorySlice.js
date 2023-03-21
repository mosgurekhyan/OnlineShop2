import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../API/API";

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: [],
        status: STATUS.IDLE,
        catProductAll: [],
        catProductAllStatus: STATUS.IDLE,
        catProductSingle: [],
        catProductSingleStatus: STATUS.IDLE
    },
    reducers: {
        setCategories(state, {payload}) {
            state.data = payload
        },
        setStatus(state, {payload}) {
            state.status = payload
        },
        setCategoriesProductAll(state, {payload}) {
            state.catProductAll.push(payload)
        },
        setCategoriesStatusAll(state, {payload}) {
            state.catProductAllStatus = payload
        },
        setCategoriesProductSingle(state, {payload}) {
            state.catProductAll = payload
        }, 
        setCategoriesStatusSingle(state, {payload}) {
            state.catProductSingleStatus = payload
        }
    }
})

export const selectCategory = state => state.category

export const {setCategories, setStatus, setCategoriesProductAll, setCategoriesStatusAll, setCategoriesProductSingle, setCategoriesStatusSingle} = categorySlice.actions

export const categoryReducer = categorySlice.reducer