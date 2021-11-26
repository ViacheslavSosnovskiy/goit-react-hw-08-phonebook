import { combineReducers } from "redux"
import { createReducer } from '@reduxjs/toolkit';
// import {addContactRequest,addContactSuccess, addContactError, changeFilter,deleteContactRequest,deleteContactSuccess,deleteContactError} from './contacts-actions'
import {addContact, changeFilter,deleteContact} from './contacts-actions'

const items = createReducer([], {
    [addContact]: (state, {payload}) => [...state, payload],
    [deleteContact]: (state, {payload}) => state.filter(contact => contact.id !== payload)
})

const filter = createReducer('', {
    [changeFilter]: (_, {payload}) => payload
})

export default combineReducers({
    items,
    filter,
})


// ========================================= //
// const items = createReducer([], {
//     [addContactSuccess]: (state, {payload}) => [...state, payload],
//     [deleteContactSuccess]: (state, {payload}) => state.filter(contact => contact.id !== payload)
// })

// const filter = createReducer('', {
//     [changeFilter]: (_, {payload}) => payload
// })

// const loading = createReducer(false, {
//     [addContactRequest]: () => true,
//     [addContactSuccess]: () => false,
//     [addContactError]: () => false,
//     [deleteContactRequest]: () => true,
//     [deleteContactSuccess]: () => false,
//     [deleteContactError]: () => false,
// })

// export default combineReducers({
//     items,
//     filter,
//     loading,
// })