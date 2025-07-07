import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    error: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.error = null
        },
        loginFailure: (state, action) => {
            state.user = null
            state.error = action.payload
        },
        logout: (state, action) => {
            state.user = null;
            state.error = null;
        },
    }
});

export const { login, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;