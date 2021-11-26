import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit'

axios.default.baseUrl = 'http://...'

const token = {
    set(token) {
        // COMMON - означает для всех и GET POsT
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

//  --- если бы делали чеез fetch ---
// fetch('', {
//     method: 'POST',
//     header: {
//         Authorization: 'Bearer token'
//     }
// })

export const register = createAsyncThunk('auth/register', async credentials => {
    try {
        const {data} = await axios.post('users/singup', credentials )
        token.set(data.token)
        return data;
    } catch (error) {}
})

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await axios.post('users/login', credentials )
        token.set(data.token)
        return data;
    } catch (error) {}
})

export const logOut = createAsyncThunk('auth/logout', async () => {
    try {
        await axios.post('users/logout');
        token.unset()
    } catch (error) {}
})

export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue()
    }

    token.set(persistedToken)
    try {
        const {data} = await axios.get('/users/current')
        return data
    } catch (error) {}
})