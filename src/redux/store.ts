import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import confirmOrderModalReducer from './slices/confirmOrderModalSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer,
        confirmOrderModal: confirmOrderModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store