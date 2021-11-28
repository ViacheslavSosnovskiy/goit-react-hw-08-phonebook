import { combineReducers } from "redux"
import { createReducer } from '@reduxjs/toolkit';
import {addContactSuccess,deleteContactSuccess,fetchContactSuccess,changeFilter} from './contacts-actions'

const items = createReducer([], {
    [fetchContactSuccess]: (_, {payload}) => payload,
    [deleteContactSuccess]: (state, {payload}) => 
        state.filter(contact => contact.id !== payload)
    [addContactSuccess]: (state, {payload}) => [payload, ...state]
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload
})

export default combineReducers({
    items,
    filter,
})