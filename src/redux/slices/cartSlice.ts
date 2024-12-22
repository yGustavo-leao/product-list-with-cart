import { CartType } from "@/@types/CartType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartType[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartType>) => {
            const index = state.findIndex(item => item.name === action.payload.name)
            if (index !== -1) {
                state[index].quantity += action.payload.quantity
            } else {
                state.push(action.payload)
            }
        },
        removeItem: (state, action: PayloadAction<CartType>) => {
            const index = state.findIndex(item => item.name === action.payload.name)
            if (index !== -1) {
                if (state[index].quantity <= 1) return state.filter(item => item.name !== action.payload.name);
                state[index].quantity -= action.payload.quantity
            }
        },
        discardItem: (state, action: PayloadAction<string>) => {
            return state.filter(item => item.name !== action.payload)
        },
        resetCart: () => {
            return []
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer