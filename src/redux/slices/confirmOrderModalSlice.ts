import { createSlice } from "@reduxjs/toolkit";

const confirmOrderModalSlice = createSlice({
    name: 'cofirmModal',
    initialState: {isOpen: false},
    reducers: {
        openModal: state => {state.isOpen = true},
        closeModal: state => {state.isOpen = false}
    }
})

export const confirmOrderModalActions = confirmOrderModalSlice.actions
export default confirmOrderModalSlice.reducer