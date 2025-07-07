import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import memberReducer from './member/memberSlice'

export const store = configureStore({
    reducer: {
       auth:authReducer,
        member:memberReducer
    }
})