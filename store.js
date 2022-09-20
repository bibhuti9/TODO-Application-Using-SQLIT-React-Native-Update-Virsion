import { configureStore } from '@reduxjs/toolkit'
import basketSlicer from './features'
export const store = configureStore({
    reducer: {
        backet: basketSlicer
    },
})