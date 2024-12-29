import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    isDrawerOpen : false,
    isLanguage: "uzb"
}

const globalReducer = createSlice({
    name: "global",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.isLanguage = action.payload
        },
        toggleModal : (state) => {
            state.isModalOpen = !state.isModalOpen
        },
        toggleDrawer : (state) => {
            state.isDrawerOpen = !state.isDrawerOpen
        }
    },
})

export const {setLanguage, toggleModal, toggleDrawer} = globalReducer.actions
export default globalReducer.reducer