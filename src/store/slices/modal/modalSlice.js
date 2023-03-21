import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        data: [],
        isModalVisible: false
    },
    reducers: {
        setModalData(state, {payload}) {
            state.data = payload
        },
        setIsModalVisible(state, {payload}) {
            state.isModalVisible = payload
        }
    }
})

export const selectModal = state => state.modal

export const {setIsModalVisible, setModalData} = modalSlice.actions

export const modalReducer = modalSlice.reducer 